export const sortFunction = (waferlists, waferlistOrder, waferlistLabel) => {

    if (waferlistOrder == 'ascending') {
        const sortWafers = waferlists.sort(function (a, b) {
            return a[waferlistLabel].localeCompare(b[waferlistLabel])
        });
        return sortWafers
    } else if (waferlistOrder == 'descending') {
        const sortWafers = waferlists.sort(function (a, b) {
            return b[waferlistLabel].localeCompare(a[waferlistLabel])
        });
        return sortWafers
    }

}