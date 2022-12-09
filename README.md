# Получаем и выводим весь список контактов
node index.js --action list
https://monosnap.com/file/MiXQD2NvxO2npC0VRIH3DZ1iSQ3AD0

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/PolajdNFyE6QsOiHn9QQFpPzh2Qlsr

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/6SfuIJKfIgfXiGL5F9DiHQuHUThRTw

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/U2hVf6MeUzI4OT2eLTyiZ93NKCpSKr
