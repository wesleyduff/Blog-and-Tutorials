
const dates = (() => {

    return {
        getFormattedDate: (date) => {
            return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
        }
    }

})();

module.exports = dates;