import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addTodo,deleteTodo} from '../actions/index';
import  '../App.css'

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducers.list)
  const dispatch = useDispatch();
  return (
 
 <>

  <div className="child-div">
<h1 style={{textAlign : "center"}}>Add your to-do-list here</h1>
    <div className=" addItems" style={{textAlign : "center"}} >
      <input  type='text' placeholder='Add your text..' value={inputData}
      onChange={(event)=>setInputData(event.target.value)}/>
      <i class="fas fa-plus" onClick={()=> dispatch(addTodo(inputData),
        setInputData('')) }></i>
       
       
        <div className="showItems"> 
            {
                list.map((elem)=>{
                  return(
                    <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <div className="todo-btn">
                    <i class="fas fa-trash add-btn" title='delete item' onClick={()=>
             dispatch(deleteTodo(elem.id))}></i>
               </div>
               </div>
                )
            }
  )}
   </div>
        </div>
    </div>
   
 </>
  )
};

export default Todo;
