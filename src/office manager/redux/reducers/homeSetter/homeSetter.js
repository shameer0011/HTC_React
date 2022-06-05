import { DEPARTMENT, DEPARTMENT_HEAD, EMPLOYEE } from '../../actionMethod'
const initialState = {
    type: ''
}
const homeSetterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPARTMENT:
            return {
                type: 'DEPARTMENT_SECTION',
            }
        case DEPARTMENT_HEAD:
            return {
                type: 'DEPARTMENT_HEAD_SECTION',
            }
        case EMPLOYEE:
            return {
                type: 'EMPLOYEE_SECTION',
            }
        default:
            return state
    }
}
export default homeSetterReducer