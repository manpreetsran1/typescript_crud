import React, { useState } from 'react'
import {Todo} from "../Model/TodoModel"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"


type Props= {
    todo: Todo;
    index: number,
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>

    // handleEdit: (e:any) => void;
    // handleDelete: (e:any) => void;
   

}

function SingleTodo({todo,setTodos, todos,index}:Props) {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>("")

const handleComplete=(indx:number)=>
{
setTodos((pre)=>[

    ...pre.slice(0, indx),
    {
        ...pre[indx],
        isDone:true,
    },
    ...pre.slice( indx+1),

])
    

}


const handleDelete=(indx:number)=>
{
setTodos(todos.filter((_d,i)=> i != indx))
    

}


const handleEdit=(data:Todo)=>
{

    if(!data.isDone){
        setEdit(!edit)
        setEditTodo(data.todo)
    }

}

const handleUpdate =(e:any)=>{
    e.preventDefault()

    setTodos((pre)=>[

    ...pre.slice(0, index),
    {
        ...pre[index],
        todo:editTodo,
    },
    ...pre.slice( index+1),

])

        setEdit(!edit)

}
  return (
    <form onSubmit={handleUpdate}   className={`todos__single `}>
        {
            edit ? 
            
            <input value={editTodo} onChange={(e:any)=> setEditTodo(e.target.value)} className="todos__single--text"/>
            :
            todo.isDone ? 
            <s className="todos__single--text">{todo.todo}</s>:
            <p className="todos__single--text">{todo.todo}</p>
        }
        {
            edit ?
            <input type={"submit"}/>
            :
<>
              <span className="icon" onClick={()=> handleEdit(todo)}><AiFillEdit/></span>
        <span className="icon"  onClick={()=> handleDelete(index)}><AiFillDelete/></span>
        <span className="icon" onClick={()=> handleComplete(index)}><MdDone/></span>
        </>
        }
      

        

    </form >
  )
}

export default SingleTodo