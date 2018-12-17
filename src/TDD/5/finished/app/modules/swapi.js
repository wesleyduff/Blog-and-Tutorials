const request = require('request');

const swapi = (() => {

    return {
        buildUrl: (query) => {
            if(!query || !query.platform || !query.id){
                throw new Error('Arguments do not match expected values.')
            }
            let url = 'https://swapi.co/api/'
            switch(query.platform){
                case 'planets':
                    url = `${url}planets/${query.id}`;
                    break;
                case 'people':
                    url = `${url}people/${query.id}`;
                    break;
                default:
                    throw new Error('query.platform was not a property on query object.')
            }
            return `${url}/?format=json`;
        },
        get: (url) => {
            console.log(url);
            return new Promise((resolve, reject) => {
                request(url, (error, response, body) => {
                    if(error){
                        reject(`Error calling api : ${error}`);
                    }
                    resolve({result: body})
                })
            })
        }
    }

})();

module.exports = swapi;