import React from 'react'

 import { useState } from 'react'


function ToggleButton() {
const [ checked,toggleButton  ]= useState(false)
  
  return (
    <div>


        <input type={"checkbox"} checked={checked} onClick={(e: any)=> toggleButton(e.target.checked)} />

        Toggle Button
    </div>
  )
}

export default ToggleButton