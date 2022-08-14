import React from 'react'
import {Todo} from "../Model/TodoModel"
import SingleTodo from "./SingleTodo"

interface Props {
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>

    // handleEdit: (e:any) => void;
    // handleDelete: (e:any) => void;
   
}
function TodoList({todos,setTodos}: Props) {
  return (
    <div className='todos'>{todos && todos.map((_d, i)=>{
        return(<>
        <SingleTodo todo={_d} todos={todos} setTodos={setTodos} index={i} />
        </>)
    })}</div>
  )
}

export default TodoList