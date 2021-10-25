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
import { checkedInspectionListAction } from '../../actions/checkedInspectionListAction'
const InspectionList = () => {

    // const appStore = useContext(AppStore);
    // console.log(appStore, "app store")

    const [inspectionLists, setInspectionLists] = useState([]);
    console.log(inspectionLists, "opppp")
    const [forward, setForward] = useState(0);
    const pages = [];
    const [page, setPage] = useState([]);
    const Rowcount = 5;
    const arrayLength = inspectionLists.length;
    const pageLimit = inspectionLists.length / Rowcount;
    const history = useHistory();
    const dispatch = useDispatch();

    const [checkedCopy, setCheckedCopy] = useState({})
    console.log(checkedCopy, "chcked copyyyyy")
    useEffect(() => {
        Object.keys(Array.apply(0, Array(arrayLength / Rowcount))).map((Number) => {
            pages.push(Number);
            setPage(pages)
        });
    }, [arrayLength])


    const totalList = useSelector(state => state.totalInspectionList);

    const checkedInspectionListFromStore = useSelector(state => state.checkedInspectionList);
    console.log(checkedInspectionListFromStore, "checked list")


    // const found = state.some(r => totalList.includes(r));
    // console.log(found, "found")


    // const f = () => {
    //     const c = Example(GetInspectionData);
    //     console.log(c, "cccccc")
    //     return c;
    // }
    // useEffect(() => {
    //     const v = f();
    //     console.log(v, "gfgfhhghghgh")
    //     console.log("haiiiiii")
    // }, [])



    useEffect(() => {
        dispatch(totalInspectionListAction(inspectionLists))
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

    const handleChange = (value, index, event) => {

        const checkedFields = totalList.map((item) => {
            item.isChecked = item.id === value.id
            return item;
        })
        setInspectionLists(checkedFields, "fdfd")
        dispatch(checkedInspectionListAction(checkedFields))


    }



    return (
        <div>

            <BasicTable
                columnDefinition={columnDefinition}
                body={inspectionLists}
                Rowcount={Rowcount}
                clickToBackandForward={forward}
                // CheckboxDetail={checkboxDetails}
                clickCheckbox={clickCheckbox}
                handleChange={handleChange}
                checkedCopy={checkedCopy}

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
