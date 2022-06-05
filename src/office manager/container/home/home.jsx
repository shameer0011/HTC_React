import React, { useState, useEffect } from 'react'
import { departmentCreateApi, departmentGetApi } from '../../apis/department/depApi'
import { getDeptList } from '../../constant';
import memories from '../../memories.png'
import { createPostDepartmentStart } from '../../redux/actions/department/post';
import Department from '../department/dept.jsx';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentHead from '../departmentHead';
import Employee from '../employee';
import { settingHomeSection } from '../../redux/actions/homeSetter/homeSetter';
const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.department);
    const { type } = useSelector(state => state.homeSetter);
    const url = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'

    useEffect(() => {
        dispatch(settingHomeSection('Department'))
    }, [])


    const buttonSubmit = async (dept, selectedFile, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("department_name", dept.name);
        formData.append("profile_image", selectedFile);
        formData.append("description", dept.description);
        dispatch(createPostDepartmentStart(formData))
    }
    // const renderElement = () => {
    //     if (type === 'DEPARTMENT_SECTION') {
    //         return (
    //             <Department buttonSubmit={buttonSubmit} />
    //         )
    //     } else if (type === 'DEPARTMENT_HEAD_SECTION') {
    //         return (
    //             <DepartmentHead />
    //         )
    //     } else if (type === 'EMPLOYEE_SECTION') {
    //         return (
    //             <Employee />
    //         )
    //     }
    // }
    return (
        <div>home page
            {/* {renderElement()} */}
            {type === 'DEPARTMENT_SECTION' ? <Department buttonSubmit={buttonSubmit} /> :
                type === 'DEPARTMENT_HEAD_SECTION' ? <DepartmentHead /> : type === 'EMPLOYEE_SECTION' ? <Employee /> : ''}



        </div>
    )
}

export default Home;