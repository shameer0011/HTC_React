export const ADD_WAFERLISTS = "add-waferlists";
export const REMOVE_WAFERLISTS = "remove-waferlists"



const totalLists = [];
const totalWaferlists = (state = totalLists, action) => {
    switch (action.type) {
        case ADD_WAFERLISTS:
            if (action)
                state.push(action.payload)
            const uniqueNames = Array.from(new Set(state));
            return uniqueNames;
        case REMOVE_WAFERLISTS:
            if (action) {
                return state.filter((value) => value.id !== action.payload.id)
            }
        default:
            return state;

    }

}
export default totalWaferlists;
// total lists