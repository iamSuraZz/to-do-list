import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo,deleteTodo} from '../actions/index';
import  '../App.css'

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  return (
  <>

  <div className="child-div">
<h1 style={{textAlign : "center"}}>Add your to-do-list here</h1>
    <div className=" addItems" style={{textAlign : "center"}} className="addItems">
      <input  type='text' placeholder='Add your text..' value={inputData}
      onChange={(event)=>setInputData(event.target.value)}/>
      <i class="fas fa-plus" onClick={()=> dispatch(addTodo(inputData)) }></i>
    </div>
    </div>
   
 </>
  )
};

export default Todo;
