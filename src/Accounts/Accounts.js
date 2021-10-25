import React from 'react';

const Accounts=(props)=>{
    return(
        <div>
            <h3>They are Accounts Like {props.account} Account </h3>
            <h4>{props.children}</h4>
        </div>
    )

}
export default Accounts;


