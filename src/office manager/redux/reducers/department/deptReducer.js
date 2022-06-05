import {
    CREATE_POST_DEPARTMENT_ERROR,
    CREATE_POST_DEPARTMENT_SUCCESS,
    CREATE_POST_DEPARTMENT_START,
    GET_DEPARTMENT_START,
    GET_DEPARTMENT_SUCCESS,
    GET_DEPARTMENT_ERROR,
    GET_EDIT_DEPARTMENT_SUCCESS,
    GET_EDIT_DEPARTMENT_START,
    GET_EDIT_DEPARTMENT_ERROR,
    TOTAL
} from '../../actionMethod'
const initialState = {
    department: [],
    loading: false,
    error: null,
    message: '',
    Editdepartment: [],
    tilte: ''
}
const deptReducer = (state = initialState, action) => {
    // console.log(action.payload, "in tottal")
    console.log(state, "in total")
    switch (action.type) {
        case CREATE_POST_DEPARTMENT_START:
        case GET_DEPARTMENT_START:
        case GET_EDIT_DEPARTMENT_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_EDIT_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                Editdepartment: state.Editdepartment.concat(action.payload),
                title: "Edit department successfully"
            }
        case CREATE_POST_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload
            }

        case GET_DEPARTMENT_SUCCESS:
            console.log("alert", action.payload)
            return {
                ...state,
                loading: false,
                error: null,
                department: action.payload
            }

        case CREATE_POST_DEPARTMENT_ERROR:
        case GET_DEPARTMENT_ERROR:
        case GET_EDIT_DEPARTMENT_ERROR:
            // case GET_EDIT_DEPARTMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: ''
            }
        case TOTAL:
            return {
                ...state,
                loading: false,
                error: null,
                Editdepartment: action.payload
            }
        default:
            console.log(action.payload, "in edit success reducer 70")
            return state
    }
}
export default deptReducer