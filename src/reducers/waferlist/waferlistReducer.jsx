export const ADD_WAFERLISTS = "add-waferlists";
export const REMOVE_WAFERLISTS = "remove-waferlists"
export const ADD_ONE_WAFERLIST = "add-one-waferlist";


const totalLists = [];
const totalWaferlists = (state = totalLists, action) => {
    switch (action.type) {
        case ADD_WAFERLISTS:
            if (action)
                state = [...state, action.payload]
            const uniqueNames = Array.from(new Set(state));
            return state;
        case REMOVE_WAFERLISTS:
            if (action) {
                return state.filter((value) => value.id !== action.payload.id)
            }
        // case ADD_ONE_WAFERLIST:
        //     if (action) {
        //         return [...state, action.paylaod]
        //     }
        default:
            return state;

    }

}
export default totalWaferlists;
// total lists