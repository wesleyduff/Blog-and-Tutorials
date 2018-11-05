// basic Factory
const electionFactory = () => {

    let election = null;

    return {
        getRace : (electionType) => {
            switch (electionType){
                case 'state':
                    election = require('./stateElection')
                    break;
                case 'national':
                    election = require('./nationalElection')
                    break;
                default:
                    throw new Error(`Election type of : ${electionType} : Does not exist`)
            }
            return election;
        }
    }
}

module.exports = electionFactory();