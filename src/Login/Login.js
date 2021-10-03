import React,{Component} from 'react';
import * as actionTypes from '../store/Actions';
import {connect} from 'react-redux';
import axios from 'axios';

class Login extends Component{

    constructor(props){
        super(props);
            this.state={
                txtusername:"",
                txtpwd:"",
                msg:""
            }
        }
   

    // state={
        
    //     txtusername: " ",
    //     txtpwd: " ",
    //     msg:" "

    // }

 valuechangehandler=(event)=>{
    // console.log(event.target.value);
    // console.log(event.target.name);
    let name=event.target.name;
    this.setState({
        [name]:event.target.value
    })
 }

 testHandler=()=>{
    axios.get('http://localhost:8000/test1/')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

 }

 
 submitHandler=()=>{
    const data = {
        username: this.state.txtusername,
        pwd: this.state.txtpwd
    };

    axios.post('http://localhost:8000/test1/', { data })
        .then(res => {
            console.log(res);
            let data=res.data;
            console.log(data);
            this.setState({
                "msg":data.message
            })
            console.log(data.status)
            if(data.status==1){
                this.props.onlogin()
            }
        })
 }

 render(){
    return(

        <div className="container ">
            <h2>SiGNIn Here..!!</h2>
            <br/>
            {/* <input type="text" className="form-control is-valid" name="txtmail" onChange={this.valuechangehandler} placeholder="**Valid Email id**" ></input> <br/> */}
            <input type="text" className="form-control is-valid" name="txtusername" onChange={this.valuechangehandler} placeholder="**UserName**" ></input> <br/>
            <input type="password" className="form-control is-valid" name="txtpwd" onChange={this.valuechangehandler} placeholder="**Password**" ></input><br/>

            <input type="submit" className="btn btn-dark" onClick={this.submitHandler} name="btn" value="SiGNIn Here..!!"></input>

             {/* <h6>{this.state.txtusername}</h6><h6>{this.state.txtpwd}</h6>  */}
            <h2 className="h2">{this.state.msg}</h2>
        </div>
    );

}

}
const mapStateTopProps=state=>{
    return{
        authState:state.Loginauth.logauth
    }
}

const mapDispathTopPros=dispath=>{
    return{
        
        onlogin:() => dispath({ type: actionTypes.AUTH_SuCCESS}),
        
    }
}

export default connect(mapStateTopProps,mapDispathTopPros)(Login);


// state={
    // txtmail:" ",
//     username:"",
//     password:""
// }

// handleChange=(event)=>{

//     let name=event.target.name;
//     this.setState({
//         [name]:event.target.value
//     })
// }



        // <div className='container' width="30%">
        //         <form>
        //             <div className="form-group">
        //                 <label><b>Username</b></label>
        //                 <input className="form-control"  onChange={this.handleChange} type="text" placeholder="Enter Username" name="username" required></input>
        //             </div>
        //             <div className="form-group">
        //                 <label><b>Password</b></label>
        //                 <input className="form-control"  onChange={this.handleChange} type="password" placeholder="Enter Password" name="password" required></input>
        //             </div>
        //             <button type="Submit" className="btn btn-dark" >Login</button>
        //         </form>
        // </div>
    //  <input type="submit" className="btn btn-dark" onClick={this.testHandler} name="btn" value="testconnection..!!"></input> 