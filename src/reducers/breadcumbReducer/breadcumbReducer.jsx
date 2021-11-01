
export const ADD_BREADCUMB = "add-breadcumb";
export const UPDATE_BREADCUMB = "update-breadcumb"

const totalLists = [];

const breadcumbReducer = (state = totalLists, action) => {
    switch (action.type) {
        case ADD_BREADCUMB:
            if (action) {
                state.push(action.payload)
                const key = 'path';
                const arrayUniqueByKey = [...new Map(state.map(item =>
                    [item[key], item])).values()];
                return arrayUniqueByKey
            }
        case UPDATE_BREADCUMB:
            if (action) {
                console.log(action.payload, "in reducer")
                return state.slice(action.payload, action.payload + 1);//1,2
            }

        default:
            return state;
    }
}
export default breadcumbReducer;
