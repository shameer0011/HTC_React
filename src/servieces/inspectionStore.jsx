import React from 'react';
// import { useDispatch } from "react-redux";
// import { createContext } from 'react';


//GET
// const dispatch = useDispatch();

export const GetInspectionData = async () => {
    let response = await fetch(`http://127.0.0.1:8000/inspectionlist`)
    const data = await response.json();
    return data;
}
