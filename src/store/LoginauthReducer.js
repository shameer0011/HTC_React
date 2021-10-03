import * as actionTypes from './Actions';

const initialstate={

    logauth:false
}

const logauth=(state=initialstate,action)=>{
    console.log(action)
    if(action.type==actionTypes.AUTH_SuCCESS){
        console.log("Inside login Auth..!")
        return{
            ...state,
            logauth:true
        }
    }
    else if(action.type==actionTypes.AUTH_FAIL){
        return{
            ...state,
            logauth:false
        }
    }
    return state;
}
export default logauth;