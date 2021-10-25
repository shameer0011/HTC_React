export const ADD_INSPECTION_LISTS = "add-inspection-lists";
export const TOTAL_INSPECTION_LISTS = "total-inspection-lists"
const inspectionLists = [];


const totalLists = [];
const totalInspectionList = (state = totalLists, action) => {
    switch (action.type) {
        case TOTAL_INSPECTION_LISTS:
            if (action) return state = action.payload;
        default:
            return state;
    }

}
export default totalInspectionList;
// total lists