export const CHECKED_INSPECTION_LISTS = "checked-inspection-lists";
export const UNCHECKED_INSPECTION_LISTS = "unchecked-inspection-lists";


const checkedLists = [];
const checkedInspectionList = (state = checkedLists, action) => {

    switch (action.type) {
        case CHECKED_INSPECTION_LISTS:
            if (action)
                state = [...state, action.payload];
            const uniqueNames = Array.from(new Set(state));
            return uniqueNames;
        case UNCHECKED_INSPECTION_LISTS:
            if (action)
                return state.filter((item) => item.id !== action.payload.id)
        default:
            return state;
    }

}
export default checkedInspectionList;