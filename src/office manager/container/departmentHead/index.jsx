import React from 'react'
import { useSelector } from 'react-redux'

const DepartmentHead = () => {
    const state = useSelector(state => state.department);
    console.log(state, "statteeee")
    return (
        <div>Department Head page</div>
    )
}

export default DepartmentHead;