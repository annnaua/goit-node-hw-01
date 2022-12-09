const shortid = require("shortid");

const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);

  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);

  if (!contact) {
    return null;
  }

  return contact;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();

  const newContact = { id: shortid.generate(), name, email, phone };
  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return newContact;
}

async function updateContact(contactId, { name, email, phone }) {
  const contacts = await listContacts();

  const contactIndex = contacts.findIndex((item) => item.id === contactId);

  if (contactIndex === -1) {
    return null;
  }

  contacts[contactIndex].name = name;
  contacts[contactIndex].email = email;
  contacts[contactIndex].phone = phone;

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return contacts[contactIndex];
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex !== -1) {
    const newContacts = contacts.filter((_, index) => index !== contactIndex);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  }

  return contacts[contactIndex];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
