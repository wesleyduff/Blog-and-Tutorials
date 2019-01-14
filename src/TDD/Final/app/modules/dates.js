
const dates = (() => {

    return {
        getFormattedDate: (rawDate) => {
            const month = ("0" + (rawDate.getMonth() + 1)).slice(-2);
            const date = ("0" + rawDate.getDate()).slice(-2);
            return `${month}-${date}-${rawDate.getFullYear()}`
        }
    }

})();

module.exports = dates;