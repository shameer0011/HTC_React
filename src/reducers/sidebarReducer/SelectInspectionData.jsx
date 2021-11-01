
export const TOTAL_SIDEBAR_DATA = "total-side-lists";
export const REMOVE_SIDEBAR_DATA = "REMOVE_SIDEBAR_DATA";

const totalLists = [];
const totalSidebarData = (state = totalLists, action) => {
    switch (action.type) {
        case TOTAL_SIDEBAR_DATA:
            if (action) {

                state.push(action.payload)
            }
            return state
        case REMOVE_SIDEBAR_DATA:
            if (action) {
                return state.filter((item) => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}
export default totalSidebarData;

//