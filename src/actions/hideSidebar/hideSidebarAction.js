import { HIDE_AND_SHOW_SIDEBAR } from "../../reducers/hideSidebarIcon/hideSidebarIcon"


export const hideAndShowSidebar = (params) => {
    console.log(params, "in action icons")
    return {
        type: HIDE_AND_SHOW_SIDEBAR,
        payload: params
    }
}