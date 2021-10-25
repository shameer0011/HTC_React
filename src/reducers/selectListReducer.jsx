export const SELECT_INSPECTION_LISTS = "select-inspection-lists";

const inspectionLists = {
    defectId: '',
    defectNo: '',
    lotId: '',
    lotNo: '',
    waferId: '',
    waferNo: ''
};

const selectInspectionListToStore = (state = inspectionLists, action) => {
    switch (action.type) {
        case SELECT_INSPECTION_LISTS:
            if (action) {
                inspectionLists.lotId = action.payload.lotId;
                inspectionLists.lotNo = action.payload.lotNo;
                inspectionLists.waferId = action.payload.waferId;
                inspectionLists.waferNo = action.payload.waferNo;
                inspectionLists.defectId = action.payload.defectId;
                inspectionLists.defectNo = action.payload.defectNo;
                return state
            }
        default:
            return state;
    }

}
export default selectInspectionListToStore;