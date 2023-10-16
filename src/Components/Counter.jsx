import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByNumber, reset } from '../redux/counterSlice'

function Counter() {
    const [textValue,setTextValue]=useState("")
    //used to dispatch action:-useDispatch()
    const dispatch = useDispatch()
    // used to acess store:-useSelector()
    const count = useSelector(state=>state.counterReducer.count)
    // console.log(textValue);
    const handleIncrement=()=>{
        console.log(textValue);
        if(textValue==""){
            alert("Plese provid an amount")
        }else{
            // dispatch action
            dispatch((incrementByNumber(Number(textValue))))
        }
    }
  return (
    <>
        <h1 className='text-center mt-5'> Counter App </h1>
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'70vh'}}>
            <div className="border rounded p-5 d-flex justify-content-center align-items-center flex-column">
                <h1> {count} </h1>
                <div className='d-flex justify-content-between w-75 mt-5'>
                    <button className='btn btn-warning' onClick={()=>dispatch(decrement())}> Decrement </button>
                    <button className='btn btn-danger' onClick={()=>dispatch(reset())}> Reset </button>
                    <button className='btn btn-success' onClick={()=>dispatch(increment())}> Increment </button>

                  
                </div>
                <div  className='d-flex mt-5'>
                <input onChange={(e)=>{setTextValue(e.target.value)}}  className='form-control' type="text" placeholder='enter amout to incremented' />
                <button onClick={handleIncrement} className='btn btn-primary ms-2'>Inremented by amount</button>
            
                </div>
               </div>
        </div>
    </>
  )
}

export default Counter