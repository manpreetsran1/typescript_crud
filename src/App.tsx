import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './Model/TodoModel';
import TodoList from './components/TodoList';




const App: React.FC =()=> {

  const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
const handleAdd = (e: any)=>{
e.preventDefault();

if(todo){
  setTodos([ {id:Date.now(), todo, isDone: false},...todos]);
}
setTodo("")


}

console.log(todos);


  return (
    <div className="App">
        <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

<TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
