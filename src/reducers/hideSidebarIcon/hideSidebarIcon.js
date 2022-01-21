export const HIDE_AND_SHOW_SIDEBAR = 'HIDE_AND_SHOW_SIDEBAR';
export const initialState = {
    show_hide: 'true'
}

const showAndHideSidebarIcon = (state = initialState, action) => {
    console.log(action, "in reducer963")
    switch (action.type) {
        case HIDE_AND_SHOW_SIDEBAR:
            const { payload } = action
            return state = { ...state, show_hide: payload }
            break;

        default:
            return state
            break;
    }
}
export default showAndHideSidebarIcon;