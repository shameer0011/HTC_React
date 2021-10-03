import React from 'react';
import './Person.css';
// function Person(props){

    // return <h2>  Iam a Person component and iam { Math.floor(Math.random()*30) } years old</h2> ;
// return <h2> Am {props.name} and i am {props.age} years Old , And iam { Math.floor(Math.random()*30) } years old.  Am Working As {props.children}</h2>
// return (
//     <div>
//         <h2>Iam {props.name} and iam {props.age} years old</h2>
//         <h3>Am Working as{props.children}</h3>
//     </div>
// );
// }
const Person=(props)=>{
    return (
        <div className="Person">
            <h2>Iam {props.name} and iam {props.age} years old</h2>
            <h3>{props.children}</h3>
            <input type="text" name="txt1" onChange={props.changed}></input>
        </div>
    )
}

export default Person;
