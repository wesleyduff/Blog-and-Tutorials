const electionFactory = require('./electionFactory');

const stateElection = electionFactory.getRace('state');
const nationalElection = electionFactory.getRace('national');

console.log(`
    State Race : ${stateElection} \n
    National Race : ${nationalElection}
`);