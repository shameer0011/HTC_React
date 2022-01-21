
export const ADD_BREADCUMB = "add-breadcumb";
export const UPDATE_BREADCUMB = "update-breadcumb";
export const REMOVE_BREADCUMB = "REMOVE_BREADCUMB";

const totalLists = [];

const breadcumbReducer = (state = totalLists, action) => {
    switch (action.type) {
        case ADD_BREADCUMB:
            if (action) {
                // state = action.payload
                state.push(action.payload)
                const key = 'path';
                const arrayUniqueByKey = [...new Map(state.map(item =>
                    [item[key], item])).values()];
                return arrayUniqueByKey
            }
        case UPDATE_BREADCUMB:
            if (action) {
                return state.slice(0, action.payload + 1);//0-1,1-2
            }
        case REMOVE_BREADCUMB:
            if (action) {
                return state = [];//0-1,1-2
            }


        default:
            return state;
    }
}
export default breadcumbReducer;
