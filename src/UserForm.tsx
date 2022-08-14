import React, { useState } from 'react'

interface IUserForm{
    name : string;
    age: number | null;
}

const defaultFormValue ={
    name : "",
    age: null,
}


function UserForm() {

    const [form, setForm]= useState<IUserForm>(defaultFormValue)
    
    
    const handleChange=(e: any)=>{
        const {name, value} = e.target;

setForm(pre=>({
    ...pre,
    [name]: value,
}))

    } 
const handleSubmit=(e: any)=>{
    e.preventDefault();
    console.log(form, "form");
    
}


  return (
    <div>


           <input type="text" name="name" value={form.name} onChange={handleChange} />

           <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  )
}

export default UserForm