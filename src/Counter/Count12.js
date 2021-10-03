import React, { useEffect, useState }  from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/Actions';


const Count12 =()=>{

    const ctr = useSelector(state => state.countReducer.counter);

    const dispath =useDispatch();

    useEffect(()=>{
        console.log('React Hook')
    })

    return(
        <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>

            <h1>Counter Hook  </h1>
            <h2>{ctr} </h2>

            <h1></h1>
            <input type="button" className="btn btn-dark" onClick={()=> dispath(onIncrementCounter())} value="INC"></input>
            <input type="button" className="btn btn-dark"  onClick={()=> dispath(onDecrementCounter())} value="Dec"></input>
            <input type="button" className="btn btn-dark"  onClick={()=>dispath(onAddCounter())} value="+"></input>
            <input type="button" className="btn btn-dark"  onClick={()=>dispath(onSubCounter())} value="-"></input>
            <input type="button" className="btn btn-dark"  onClick={()=>dispath(onMultiple())} value="*"></input>
            <input type="button" className="btn btn-dark"  onClick={()=>dispath(onDivison())} value="/"></input>



        </div>

    );
}

const onIncrementCounter = () => ({type : actionTypes.INC_COUNTER});
const onDecrementCounter = () => ({type : actionTypes.DEC_COUNTER});
const onAddCounter = () => ({ type : actionTypes.ADD_COUNTER,value:4});
const onSubCounter = () => ({ type : actionTypes.SUB_COUNTER,value:2});
const onMultiple = () => ({ type : actionTypes.MULTi_COUNTER,value:5});
const onDivison = () => ({ type: actionTypes.DIVION_COUNTER,value:2});

export default Count12;