import React, { useState, useEffect, useCallback } from 'react'
import BasicTable from '../../components/table';
import { GetInspectionData } from '../../servieces/inspectionStore'
import { columnDefinition } from '../../components/table/columnDefinition'
import Pagination from '../../components/pagination/pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useHistory, Link } from "react-router-dom";
import Container from '../container/index'
import { useSelector, useDispatch } from 'react-redux'
import { updatePageIndex } from '../../actions/pageAction';
import Example from '../../servieces/example'
import { addInspectionList, totalInspectionListAction } from '../../actions/inspectionListAction';
import Checkbox from '@mui/material/Checkbox';
import { checkedInspectionListAction, uncheckedInspectionListAction } from '../../actions/checkedInspectionListAction'
import totalSidebarData from '../../reducers/sidebarReducer/SelectInspectionData';
import { removeSidebarData, sidebarSelectInspectDatas } from '../../actions/sidebar/selectInspectionAction';
import { addWaferlistDatas, removeWaferlistDatas } from '../../actions/waferlist/addWaferlist';
const InspectionList = () => {

    const [inspectionLists, setInspectionLists] = useState([]);
    const [forward, setForward] = useState(0);
    const pages = [];
    const [page, setPage] = useState([]);
    const Rowcount = 5;
    const arrayLength = inspectionLists.length;
    const pageLimit = inspectionLists.length / Rowcount;
    const history = useHistory();
    const dispatch = useDispatch();
    //total inspection lists
    const totalList = useSelector(state => state.totalInspectionList);
    //totalSidebarData
    const totalSidebarList = useSelector(state => state.totalSidebarData);
    console.log(totalSidebarList, "oppppppp")
    const [checkedState, setCheckedState] = useState();
    const checkedInspectionListFromStore = useSelector(state => state.checkedInspectionList);
    const [data, setData] = useState(checkedInspectionListFromStore);


    useEffect(() => {
        Object.keys(Array.apply(0, Array(arrayLength / Rowcount))).map((Number) => {
            pages.push(Number);
            setPage(pages)
        });
    }, [arrayLength])



    useEffect(() => {
        setData(checkedInspectionListFromStore)
    }, [checkedInspectionListFromStore])


    useEffect(() => {
        setCheckedState(new Array(inspectionLists.length).fill(false));
    }, [inspectionLists])

    useEffect(() => {
        (async () => {
            const Data = await GetInspectionData();
            setInspectionLists(Data)
        })();
    }, [GetInspectionData])


    const leftIcon = () => {
        setForward((forward) => forward - Rowcount)
    }
    const RightIcon = () => {
        setForward((forward) => forward + Rowcount)

    }
    const pageNumberClick = (value) => {
        if (value == 0) {
            setForward(0)
        } else {
            setForward((pageLimit * value + (+value)));
        }
    }
    const gotoWaferDetails = (value) => {
        history.push("/waferdetails")
        dispatch(updatePageIndex(value))
    }

    let rowIndexValue = '';
    let checkboxValueses = '';

    const clickCheckbox = (selectCheckboxValue, rowIndex) => {
        rowIndexValue = rowIndex;
        checkboxValueses = selectCheckboxValue;
    }

    // To store all inspection lists

    dispatch(totalInspectionListAction(inspectionLists))
    // total inspection table data;

    const handleChange = (checkBoxvalue, position) => {

        dispatch(sidebarSelectInspectDatas(checkBoxvalue))

        const updatedCheckedState = checkedState.map((item, index) => { // for update true or false
            return index === position ? !item : item
        })
        setCheckedState(updatedCheckedState);

        updatedCheckedState.map((value, index) => {
            if (value === true) {
                dispatch(checkedInspectionListAction(checkBoxvalue))
                //to waferlist
                dispatch(addWaferlistDatas(checkBoxvalue))

            }
        })
        if (data?.length) {
            data.map((value, index) => {
                if (value.id == checkBoxvalue.id) {
                    dispatch(uncheckedInspectionListAction(value))
                    dispatch(removeSidebarData(value))
                    //remove waferlist
                    dispatch(removeWaferlistDatas(value))

                }
            })
        }
    }



    return (
        <div>

            <BasicTable
                columnDefinition={columnDefinition}
                body={inspectionLists}
                Rowcount={Rowcount}
                clickToBackandForward={forward}
                clickCheckbox={clickCheckbox}
                handleChange={handleChange}
                checkedState={checkedState}

            />
            <Pagination
                leftIcon={leftIcon}
                RightIcon={RightIcon}
                clickToBackandForward={forward}
                arrayLength={arrayLength}
                page={page}
                Rowcount={Rowcount}
                pageNumberClick={pageNumberClick}
            />
            <div style={{ width: '1518px', height: "100px", backgroundColor: '#1976d2', display: "flex", justifyContent: 'flex-end' }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>

                    <Button variant="contained" onClick={() => gotoWaferDetails(0)}>WAFER LIST</Button>
                    <Button variant="contained" onClick={() => gotoWaferDetails(1)}>WAFER DETAILS</Button>
                    <Button variant="contained" onClick={() => gotoWaferDetails(2)}>TEST dETAILS</Button>
                </div>
            </div>
        </div>
    )
}
export default InspectionList;
