import React,{useReducer} from 'react'
//step2
const initialState=0;
//step5
const reducer=(state, action)=>{
    switch(action){
        case 'increment': return state+1;
        case 'decrement': return state-1;
        case 'reset':return 0;
        default: throw new Error('unexpected action');
        }
}
export const ReducerExample = () => {
//step3
    const [count ,dispatch]= useReducer(reducer,initialState);
    return (
       //step4
       <div>
           {/* count =initialState */}
            {count}
            <button onClick={()=> dispatch('increment')}>+1</button>
            <button onClick={()=> dispatch('decrement')}>-1</button><br/>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}
export default ReducerExample;