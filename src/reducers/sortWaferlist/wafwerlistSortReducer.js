const initialState = {
    order: 'ascending',
    label: 'waferId'
}
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const CHANGE_LABEL = 'CHANGE_LABEL';

const sortWaferListReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_ORDER:
            if (action) {
                state.order = action.payload
                return state
            }
        case CHANGE_LABEL:
            if (action) {
                state.label = action.payload
                return state
            }
        default:
            console.log("2")
            return state
            break;
    }
}
export default sortWaferListReducer;
