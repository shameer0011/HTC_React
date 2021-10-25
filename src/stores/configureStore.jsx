import { createStore, combineReducers } from "redux";
import inspectionListToStore from "../reducers/inspectionListStore";
import pageReducer from "../reducers/pageReducer";
import selectInspectionList from "../reducers/selectInspectionList";
import selectInspectionListToStore from "../reducers/selectListReducer";
import selectRemoveInspectionList from '../reducers/selectInspectionList'
import totalInspectionList from "../reducers/inspectionListStore";
import checkedInspectionList from "../reducers/checkedInspectionList";

const configureStore = () => {
    return createStore(
        combineReducers({
            pageReducer: pageReducer,
            totalInspectionList: totalInspectionList,// total inspection list from db
            selectInspectionListToStore: selectInspectionListToStore,// to wafer detail
            checkedInspectionList: checkedInspectionList
        })
    );
};
export default configureStore;

