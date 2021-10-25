export const CHECKED_INSPECTION_LISTS = "checked-inspection-lists";
const inspectionLists = [];


const checkedLists = [];
const checkedInspectionList = (state = checkedLists, action) => {
    switch (action.type) {
        case CHECKED_INSPECTION_LISTS:
            if (action)
                state = action.payload
        default:
            return state;
    }

}
export default checkedInspectionList;