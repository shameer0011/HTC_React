import React,{Component} from 'react';
import * as actiontypes from '../store/Actions';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';

// const Signout=()=>{
 class Signout extends Component{
    componentDidMount(){
        console.log("inside....   logOut..!!");
        this.props.onlogout();
    }
render(){
return(
    <Redirect to="/"></Redirect>
);
}
}
const mapDispathToProps=dispath=>{
    return{
        onlogout:()=>dispath({type:actiontypes.AUTH_FAIL})
    }
}
export default connect(null,mapDispathToProps)(Signout);