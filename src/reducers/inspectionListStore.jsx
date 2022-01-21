export const ADD_INSPECTION_LISTS = "add-inspection-lists";
export const TOTAL_INSPECTION_LISTS = "total-inspection-lists";
export const UPDATE_TOTAL_INSPECTION_LISTS = "update-total-inspection-lists";
const inspectionLists = [];


const totalLists = [];
const totalInspectionList = (state = totalLists, action) => {
    switch (action.type) {
        case TOTAL_INSPECTION_LISTS:
            if (action)
                return state = action.payload;

        case UPDATE_TOTAL_INSPECTION_LISTS:
            if (action) {
                state = [...state, ...action.payload];
                const uniqueNames = Array.from(new Set(state));
                return uniqueNames;
            }
        default:
            return state;
    }

}
export default totalInspectionList;

// total lists
