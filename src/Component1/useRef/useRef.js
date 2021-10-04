import React,{useRef} from 'react'
function UseRef(){
    //uncontrolled component as controlled by Dom
    //to know the current state from DOM =>useRef lifecycle hook
    const inputElement=useRef(null);
    const onButtonClick=()=>{
        //'current' points to the munted text input element
        console.log(inputElement.current);
        inputElement.current.focus();
        //collecting value from input field using useRef
        console.log("input field value",inputElement.current.value);
    };
    return(
        <>
        <input ref={inputElement} type="text"></input><br/>
        <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
export default UseRef;