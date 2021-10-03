import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component{
    state={
        txtusername:" ",
        txtmail:" ",
        txtpwd:" ",
        txtconpwd:" ",
        msg:" "
    }
    valuechangehandler=(event)=>{
        let signname=event.target.name;
        this.setState({
            [signname]:event.target.value
        })
    }
 submithandler=()=>{

    const data={
            username:this.state.txtusername,
            mail:this.state.txtmail,
            pwd:this.state.txtpwd,
            conpwd:this.state.txtconpwd
    }
    axios.post("http://localhost:8000/reactsaveuser/",{data}).then(res=>{

            console.log(res);
            let data=res.data;
            console.log(data);
            this.setState({
                "msg":data.message
            })


    })
 }

render(){
    return(
        <div className="Container" width="30%">
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>SignUp Here..!!</h2>
            <form>
                <br/>
                <div className="form-group">
                    <br/>
                    <input type="text" className="form-control is-valid" name="txtusername" onChange={this.valuechangehandler} placeholder="Enter your UserName.." required></input><br/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control is-valid" name="txtmail" onChange={this.valuechangehandler} placeholder="**Valid Email id**" required ></input> <br/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control is-valid" name="txtpwd" onChange={this.valuechangehandler} placeholder="..Password.." required></input><br/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control is-valid" name="txtconpwd" onChange={this.valuechangehandler} placeholder="..PasswordConfirmation.." required></input>
                </div>
                <div>
                    <input type="button" className="btn btn-dark" onClick={this.submithandler} name="btn" value="SiGN Up Here..!!"></input>
                </div>

            </form>
    <h8>{this.state.txtusername}</h8><br/><h8>{this.state.txtmail}</h8><br/><h8>{this.state.txtpwd}</h8><br/><h2>{this.state.msg}</h2>

        </div>
        );

    }
} 
export default Signup;