import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {char_id} = useParams();
    console.log(char_id);
  return (
    <div>
     <h1>detail</h1>
    </div>
  )
}

export default Detail
