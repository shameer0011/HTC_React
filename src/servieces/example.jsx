import React from 'react'

const example = () => {

    const GetInspectionData = async () => {
        let response = await fetch(`http://127.0.0.1:8000/inspectionlist`)
        const data = await response.json();
        return data;
    }
    // return (
    //     <div>

    //     </div>
    // )
}
export default example;

