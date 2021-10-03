import * as actionTypes from './Actions';

const initialstate={

    counter:0
}

const counterReducer=(state=initialstate,action)=>{

    console.log(action)
    if(action.type==actionTypes.ADD_COUNTER){
        return {
            ...state,
            counter:state.counter+action.value
        }
    }
    else if(action.type==actionTypes.SUB_COUNTER){
        return {
            ...state,
            counter:state.counter-action.value
        }  
    }
    else if(action.type==actionTypes.INC_COUNTER){
        return {
            ...state,
            counter:state.counter+1
        } 
    }
    else if(action.type==actionTypes.DEC_COUNTER){
        return {
            ...state,
            counter:state.counter-1
        } 
    }  
    else if(action.type==actionTypes.MULTi_COUNTER){
        return {
            ...state,
            counter:state.counter*action.value
        } 
    }
    else if(action.type==actionTypes.DIVION_COUNTER){
        return {
            ...state,
            counter:state.counter/action.value
        } 
    }

    return state;
}
export default counterReducer;