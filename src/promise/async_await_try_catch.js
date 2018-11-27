/*
This file shows how we can use promises over callbacks.
- makes code easier to read
- makes code easier to manage
 */
const   database    = require('database/from/somewhere'),
        logger      = require('logger/from/somewhere');

const calendarEvents = (() => {

    //private

    return {
        getCalendarEventsForDateFromDatabase: (date) => {
            return new Promise((resolve, reject) => {
                database.collection('calendarEvents').find({}).toArray((error, result) => {
                    if(error){
                        reject({
                            error,
                            code: 500
                        })
                    } else {
                        resolve({
                            code:200,
                            data: result
                        })
                    }
                });
            })
        }
    }
})();

const hanlders = (() => {

    const hasCode = (objectToCheck) => {
        return objectToCheck && objectToCheck.code;
    }

    const has200 = (objectToCheck) => {
        return objectToCheck.code === 200;
    }

    return {
        handleResponseFromPromise: (resultFromPromise) => {
            if(hasCode(resultFromPromise) && has200(resultFromPromise)){
                return {
                    code: 200,
                    data: resultFromPromise.data
                }
            } else if(hasCode(resultFromPromise) && !has200(resultFromPromise)){
                return {
                    code:500,
                    error: resultFromPromise.error
                }
            }
        },
        handleMissingCodeResponseFromPromise: (resultFromPromise) => {
           throw new Error(`The result from promise does not contain a code: instead we got : ${resultFromPromise}`)
        }
    }
})


const init = async () =>{

    try{

        const resultFromPromise = await calendarEvents.getCalendarEventsForDateFromDatabase(date);

        if(resultFromPromise && resultFromPromise.code){
            return handlers.handleResponseFromPromise(resultFromPromise)
        } else {
            return handlers.handleMissingCodeResponseFromPromise(resultFromPromise);
        }


    } catch(exception){

        //if our promise threw a rejection or threw an error
        logger.error(`Exception thrown in init method : exception = ${exception}`)

    }

};

module.exports = init;