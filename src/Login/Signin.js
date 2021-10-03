import React,{useState} from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

const Signin=()=>{
    const[username, setusername]=useState('');
    const[password, setpwd]=useState('');
    const[msg,setmsg]=useState('');

    const submithandler=()=>{

            const data={
                username:username,
                password:password
            };


        axios.post('http://localhost:8000/blog/test/', { data })
            .then(res => {
                console.log(res);
                let data=res.data;
                console.log(data);
                setmsg(data.message)
            })
    }

//   const  submithandler=()=>{
//     axios.get('http://localhost:5000/getusers')
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//   }
  

return(
    <div className="container">
        <br/>
        <br/>
        <br/>
        <h2>SiGNIn Here..!!</h2>

        <br/>
        <form>
            <br/>
                   <div className="form-group">
                        
                        <input className="form-control" onChange={event =>{
                            setusername(event.target.value)
                        }}  type="text" placeholder="Enter Username" name="username" required></input>
                    </div>
                    <br/>
                    <div className="form-group">
                        
                         <input className="form-control" onChange={event =>{
                             setpwd(event.target.value)
                         }} type="password" placeholder="Enter Password" name="password" required></input>
                    </div>
                    <button type="button" onClick={submithandler} className="btn btn-dark" >Login here..</button>

        </form>
                        <h1>{msg}</h1>
                        <h6>{username}</h6><h6>{password}</h6>
    </div>

);

}
export default Signin;