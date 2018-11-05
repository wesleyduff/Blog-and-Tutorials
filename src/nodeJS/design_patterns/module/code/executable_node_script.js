const databaseModule = require('./databaseModule');

console.log(`
    calling the database module and get the private variable : \n
    returned value : ${databaseModule.getPrivate()} \n
    Calling the database module and list out the users : \n
    returned value : ${databaseModule.getUsers()}
`);