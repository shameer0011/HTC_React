import { useSelector } from "react-redux";

export const ADD_SELECT_INSPECTION_LISTS = "add-select-inspection-lists";
export const REMOVE_SELECT_INSPECTION_LIST = "remove-select-inspection-lists";

const inspectionLists = [];

const SelectInspectionList = (state = inspectionLists, action) => {
    const stateRemover = useSelector(state => state.selectInspectionList);
    switch (action.type) {
        case ADD_SELECT_INSPECTION_LISTS:
            if (action)
                state.push(action.payload)
            const uniqueNames = Array.from(new Set(state));
            return uniqueNames;
        case REMOVE_SELECT_INSPECTION_LIST:
            if (state.length) {
                const updateReducer = state.filter(item => item.id == !action.payload.id)
                return updateReducer
            }
        default:
            return state;
    }

}
export default SelectInspectionList;

// To wafer list with distinct values


