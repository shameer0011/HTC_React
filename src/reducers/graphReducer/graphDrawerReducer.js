export const GRAPH_ORDER = 'DEFAULT_GRAPH_ORDER';
const initialstate = 'ascending';

const graphOrderReducer = (state = initialstate, action) => {
    // console.log(action.type, "in reducer")
    switch (action.type) {
        case GRAPH_ORDER:
            if (action.payload == 'ascending') {
                // console.log('Ascending', "789")
                return state = action.payload
            } else {
                // console.log('Descendin', "descending reducer")
                return state = action.payload
            }
            break;

        default:
            // console.log("in default cause")
            return state
            break;
    }
}
export default graphOrderReducer