
const databaseModule = () => {
    const private_variable = "Im Private!";


    return {
        getPrivate: () => {
            return `Private variable any method can use, and it is NAMESPACED : \n private variable = ${private_variable}`;
        },
        getUsers: () => {
            const users = ['john', 'mike', 'harry'];
            return users.join(',');
        }
    }
}

module.exports = databaseModule();