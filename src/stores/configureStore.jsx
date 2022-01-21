import { createStore, combineReducers } from "redux";
import inspectionListToStore from "../reducers/inspectionListStore";
import pageReducer from "../reducers/pageReducer";
import selectInspectionList from "../reducers/selectInspectionList";
import selectInspectionListToStore from "../reducers/selectListReducer";
import selectRemoveInspectionList from '../reducers/selectInspectionList'
import totalInspectionList from "../reducers/inspectionListStore";
import checkedInspectionList from "../reducers/checkedInspectionList";
import totalSidebarData from "../reducers/sidebarReducer/SelectInspectionData";
import totalWaferlists from "../reducers/waferlist/waferlistReducer";
import breadcumbReducer from "../reducers/breadcumbReducer/breadcumbReducer";
import graphOrderReducer from "../reducers/graphReducer/graphDrawerReducer";
import showAndHideSidebarIcon from "../reducers/hideSidebarIcon/hideSidebarIcon";
import sortWaferListReducer from "../reducers/sortWaferlist/wafwerlistSortReducer";

const configureStore = () => {
    return createStore(
        combineReducers({
            pageReducer: pageReducer,
            totalInspectionList: totalInspectionList,// total inspection list from db
            checkedInspectionList: checkedInspectionList,// checked table data
            totalSidebarData: totalSidebarData,//total side bar data
            totalWaferlists: totalWaferlists,
            breadcumbReducer: breadcumbReducer,
            graphOrderReducer: graphOrderReducer, //ascending/descending
            showAndHideSidebarIcon: showAndHideSidebarIcon, //show or hide icons
            sortWaferListReducer: sortWaferListReducer // sort wafer list
        })
    );
};
export default configureStore;

