import React, { useRef } from "react";
import { Interface } from "readline";

interface Props {
    todo: string;
    handleAdd: (e:any) => void;
    setTodo:  React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props>=({todo,setTodo, handleAdd})=> {

const inputRef = useRef<HTMLInputElement>(null)

  return <>


    <form onSubmit={(e)=>{
      handleAdd(e);
      inputRef.current?.blur()
    }}
      className="input">

      <input ref={inputRef} type="input" value={todo} onChange={(e)=> setTodo(e.target.value)} className="input__box"/>

      <button className="input_submit" type="submit">Add</button>
    </form>
  </>;
}

export default InputField;
