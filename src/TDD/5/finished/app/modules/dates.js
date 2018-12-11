
const dates = (() => {

    return {
        getFormattedDate: (date) => {
            return `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`
        }
    }

})();

module.exports = dates;