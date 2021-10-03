import React, { Component } from 'react';
import Person from '../Person/Person';
import Accounts from '../Accounts/Accounts';
import Counter from '../Counter/Counter';

class Persons extends Component{

    state = {
        Person:[
          { name:"JAV", age:18},
          { name: "Viv", age:19},
          { name: "SMR", age: 20}
        ],
        showPerson:false
      }
      // Btnshowing=()=>{
      //   this.setState({
      //     showPerson:!this.state.showPerson
      //   })
      // }
  
      // Btnhandler=()=>{
      //   console.log("Clicked!!")
      //   this.setState({
      //     Person: [
      //       { name: "JAV", age: 18 },
      //       { name: "Viv", age: 19 },
      //       { name: "SmR", age: 20 }
      //     ]
      //   })
      // }
  
      // namechangehandler=(event)=>{
      //   console.log(event.target.value)
      //   this.setState({
      //     Person: [
      //       { name: event.target.value, age: 18 },
      //       { name: "sree", age: 19 },
      //       { name: "Anu", age: 20 }
      //     ]
      //   })
  
      // }

    render(){
        return(
          <div>
            <br/>
            {
            this.state.Person.map((p, index) => {
            return <Person {...p}></Person>
          })
        }
          </div> 
        
        );


      }
  }
  export default Persons;
    // <div>
    //    <p>----------------------------------------------------------------</p>

    //   <h1> WeLcOmE To  REaCT....!! </h1> 
    //   <p>----------------------------------------------------------------</p>
    
    //   <div>

    //     <Person name="Jishnu" age="25"  >Full Stack Developer</Person>
    //     <Person name="Vivek" age="24" >Developer</Person>
    //     <Person name="Shameer" age="18">Python Developer</Person>
    //     <Person name="Dhaneesh" age="10">Django Developer</Person>
    //     <Person name="Sree" age="48">HR Manager</Person>
    //   </div>
    //  <br/>
    //   <p>----------------------------------------------------------------</p>
    //   <input type="button" onClick={this.Btnshowing} value="Click Here "></input>

    //   { this.state.showPerson == true ?
    //   <div>
    //     <Person name={this.state.Person[0].name} age={this.state.Person[0].age} changed={this.namechangehandler} ></Person>
    //     <Person name={this.state.Person[1].name} age={this.state.Person[1].age}></Person>
    //     <Person name={this.state.Person[2].name} age={this.state.Person[2].age}></Person>
    //     <input type="button" onClick={this.Btnhandler} value="Click Here to Test..!"></input>
    //   </div>
    //   : null }
    //   <br/>
    //   <p>----------------------------------------------------------------</p>
    //   <input type="button" onClick={this.Btnshowing} value="Click Here "></input>

    //   { this.state.showPerson == true ?
    //   <div>
    //     <Accounts account="Saving">save the money</Accounts>
    //     <Accounts account="Current">current money </Accounts>
    //     <Accounts account="Fixed Account">we real want saving then FD Account is Super!!</Accounts>
    //   </div>
    //   : null } 

    //    <p>----------------------------------------------------------------</p> 
    //   <input type="button" onClick={this.Btnshowing} value="Click Here "></input>

    //     { this.state.showPerson == true ? 
    //      <div> 
    //        <Counter></Counter> 
    //     </div> 
    //     : null } 
    // </div> 
         

   
