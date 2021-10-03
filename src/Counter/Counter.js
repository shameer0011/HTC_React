import React, { Component } from 'react';
import * as actionTypes from '../store/Actions';
import {connect} from 'react-redux';

class Counter extends Component {

    constructor(props) {
        super(props);
    }
    // state={
    //     Count:1
    // }

    // btnInc=()=>{
    //     console.log("Clicked..!!")
    //     this.setState({
    //         Count:this.state.Count+1
    //     })
    // }
    // btnDec=()=>{
    //     this.setState({
    //         Count:this.state.Count-1
    //     })
    // }
    // btndouble=()=>{
    //     this.setState({
    //         Count:this.state.Count*2
    //     })
    // }

    render(){
        return(
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Counter Component..</h1>

                    <h2>{this.props.ctr}</h2>
                    <input type="button" className="btn btn-dark" onClick={this.props.onIncrementCounter} value="Inc" ></input>
                    <input type="button" className="btn btn-dark" onClick={this.props.onDecrementCounter} value="Dec"></input>
                    <input type="button" className="btn btn-dark" onClick={this.props.onAddCounter} value="+"></input>
                    <input type="button" className="btn btn-dark" onClick={this.props.onSubCounter} value="-"></input>
                    <input type="button" className="btn btn-dark" onClick={this.props.onMultiplcation} value="*"></input>
                    <input type="button" className="btn btn-dark" onClick={this.props.onDivion} value="/"></input>

                </div>

            // <div>
            //     <h1>Counter Component..</h1>
            //     <h4>{this.state.Count}</h4>
            //     <input type="button" onClick={this.btndouble} value="*"></input>
            //     <input type="button" onClick={this.btnInc} value="+"></input>
            //     <input type="button" onClick={this.btnDec} value="-"></input>

            // </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        ctr: state.countReducer.counter
    }

}

const mapDispatchToPros = dispatch => {
    return{
        onIncrementCounter:() => dispatch({ type: actionTypes.INC_COUNTER }),
        onDecrementCounter:() => dispatch({ type: actionTypes.DEC_COUNTER }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD_COUNTER,value:5 }),
        onSubCounter: () => dispatch({ type: actionTypes.SUB_COUNTER,value:2 }),
        onMultiplcation:() => dispatch({ type: actionTypes.MULTi_COUNTER,value:4}),
        onDivion: () => dispatch({ type: actionTypes.DIVION_COUNTER,value:2 }),  
      }
}

export default connect(mapStateToProps,mapDispatchToPros)(Counter);
