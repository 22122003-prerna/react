import React from 'react'
import { useParams } from 'react-router'

const ParamsComp = () => {
    const {id} = useParams();
  return (
    <div>
    <h1>Params : {id}</h1> 
    </div>
  )
}

export default ParamsComp