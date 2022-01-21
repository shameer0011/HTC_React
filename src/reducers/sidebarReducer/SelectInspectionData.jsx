
export const TOTAL_SIDEBAR_DATA = "total-side-lists";
export const REMOVE_SIDEBAR_DATA = "REMOVE_SIDEBAR_DATA";
export const UPDATE_SIDEBAR_DATA = "UPDATE_SIDEBAR_DATA";
export const UPDATE_SIDEBAR_VALUE = "UPDATE_SIDEBAR_VALUE";

const totalLists = [];
const totalSidebarData = (state = totalLists, action) => {
    switch (action.type) {
        case TOTAL_SIDEBAR_DATA:
            if (action) {
                state = [...state, action.payload];
                const uniqueNames = Array.from(new Set(state));
                return uniqueNames;
            }
            return state
        case REMOVE_SIDEBAR_DATA:
            if (action) {
                return state.filter((item) => item.id !== action.payload.id)
            }
        case UPDATE_SIDEBAR_DATA:
            if (action) {
                const updated = state.map((item, index) => {
                    if (item.id === action.payload.id) {
                        item.isChecked = action.payload.isChecked
                    }
                    return item
                })
            }
        case UPDATE_SIDEBAR_VALUE:
            if (action) {
                state = [...state, action.payload];
                const uniqueNames = Array.from(new Set(state));
                return uniqueNames;
            }

        default:
            return state;
    }
}
export default totalSidebarData;

//