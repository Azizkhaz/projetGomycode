import React from 'react'
import { useNavigate } from 'react-router'

function ButtonAdd() {
  const navigate = useNavigate() 

  const addfood = () =>{
    navigate('/addfood')
  }
  return (
    <div>
        <button onClick={()=>addfood()} >
       add food
        </button>
    </div>
  )
}

export default ButtonAdd