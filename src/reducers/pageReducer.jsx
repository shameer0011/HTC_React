export const GET_PAGE_INDEX = "get-page-index";
export const UPDATE_PAGE_INDEX = "update-page-index";

const pageIndex = {
    index: 0
}

const pageReducer = (state = pageIndex, action) => {
    switch (action.type) {
        case GET_PAGE_INDEX:
            return state;
        case UPDATE_PAGE_INDEX:
            if (action) {
                pageIndex.index = action.payload
                return state
            }


        default:
            return state;
    }
};
export default pageReducer;
