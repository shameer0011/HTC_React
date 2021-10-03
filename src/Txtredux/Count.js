import React, { Component, useEffect, useState } from 'react';
// import {connect} from 'react-redux';
import * as actionTyped from '../store/LoginauthReducer';
import Counter from '../Counter/Counter';
import { useSelector } from 'react-redux';


const Count = ()=>{

    const ctr = useSelector(state => state.countReducer.counter);
    const auth = useSelector(state => state.Loginauth.logauth); 

    useEffect(()=>{
        console.log('React Hook')
    });
    
    return(
        <div className="container">
            <br/>
                <br/>
                <br/>
                <br/>
            <h4>Redux Hook Connect...!!</h4>
            <h2>{ctr}</h2>
            <h2>{auth+""}</h2>
        </div>
    );
}
export default Count;



// class Count extends Component{


//     render(){

//         return(
            // <div className="container">
            //     <br/>
            //     <br/>
            //     <br/>
            //     <br/>
            //     <h4>Redux Connect...!!</h4>
            //     <h2>{this.props.ctr}</h2>
            //     <h2>{this.props.authState+""}</h2>
            //     {/* {console.log(this.props.authState)} */}
            // </div>
//         )
//     }
// }

// const mapStateToProps = state => {
    // return {
    //     ctr: state.countReducer.counter,
    //     authState:state.Loginauth.logauth

    // }

// }

// export default connect(mapStateToProps)(Count);