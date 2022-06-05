import React, { useState, useEffect, useCallback } from 'react'
import Form from '../../components/form/form';
import { departmentGetApi, getDepartmentEditeApi } from '../../apis/department/depApi'
import Table from '../../components/table/table';
import { getDepartmentStart, getEditDepartmentStart, totalSpace } from '../../redux/actions/department/post';
import { useDispatch, useSelector } from 'react-redux'
const Dept = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit, buttonSubmit } = props;
    const { department } = useSelector(state => state.department);
    const departments = useSelector(state => state.department);
    console.log(departments, "edit depart,memtn 111")
    const [departmentEdit, setDepartmentEdit] = useState([])
    useEffect(() => {
        dispatch(getDepartmentStart())
    }, [dispatch])


    const editRow = useCallback((id) => {
        dispatch(getEditDepartmentStart(parseInt(id)))
    }, [])

    return (
        <div>
            <Form buttonSubmit={buttonSubmit} />
            <Table department={department.departments} editRow={editRow} />

        </div>
    )
}

export default Dept