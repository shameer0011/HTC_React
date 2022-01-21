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
import { updateTotalInspectionListAction, totalInspectionListAction, updateTotalInspectionLists } from '../../actions/inspectionListAction';
import Checkbox from '@mui/material/Checkbox';
import { checkedInspectionListAction, uncheckedInspectionListAction } from '../../actions/checkedInspectionListAction'
import totalSidebarData from '../../reducers/sidebarReducer/SelectInspectionData';
import { removeSidebarData, sidebarSelectInspectDatas } from '../../actions/sidebar/selectInspectionAction';
import { addWaferlistDatas, removeWaferlistDatas } from '../../actions/waferlist/addWaferlist';
import { removeBreadcumbs } from '../../actions/breadcumbs/addbreadcumb';
import { hideAndShowSidebar } from '../../actions/hideSidebar/hideSidebarAction';
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
    const totalList = useSelector(state => state.totalInspectionList);// total

    useEffect(() => {
        Object.keys(Array.apply(0, Array(arrayLength / Rowcount))).map((Number) => {
            pages.push(Number);
            setPage(pages)
        });
    }, [arrayLength])

    useEffect(() => {
        dispatch(removeBreadcumbs())
    }, [])

    useEffect(() => {
        dispatch(hideAndShowSidebar(false))
        return () => {
        }
    }, [])

    useEffect(() => {
        (async () => {
            const Data = await GetInspectionData();
            setInspectionLists(totalList.length ? totalList : Data)
        })();
    }, [])

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

    var rowIndexValue = '';
    var checkboxValueses = ''
    const clickCheckbox = (selectCheckboxValue, rowIndex) => {
        rowIndexValue = rowIndex;
        checkboxValueses = selectCheckboxValue;
    }

    if (!totalList.length) {
        dispatch(totalInspectionListAction(inspectionLists))
    }

    const handleChange = (checkBoxvalue) => {
        const checked = inspectionLists.map((item) => {
            if (item.id == checkBoxvalue.id) {
                item.isChecked == true ? item.isChecked = false : item.isChecked = true
                if (item.isChecked == true) {
                    checkBoxvalue.checked = true
                    dispatch(sidebarSelectInspectDatas(checkBoxvalue))
                    dispatch(addWaferlistDatas(checkBoxvalue))
                } else {
                    dispatch(removeSidebarData(checkBoxvalue))
                    dispatch(removeWaferlistDatas(checkBoxvalue))
                }
            }
            return item
        })
        dispatch(updateTotalInspectionLists(checked))
    }

    return (
        <div style={{ width: '100%' }}>
            <BasicTable
                columnDefinition={columnDefinition}
                body={totalList ? totalList : inspectionLists}
                Rowcount={Rowcount}
                clickToBackandForward={forward}
                clickCheckbox={clickCheckbox}
                handleChange={handleChange}

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
            <div style={{ width: '100%', height: "100px", backgroundColor: '#1976d2' }}>
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
