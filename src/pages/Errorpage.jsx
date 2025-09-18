import React, { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {
    const error  = useRouteError();
  return (
    <div>
        <h1>Errorpage</h1>
        <h3>{error.data}</h3>

    </div>
  )
}

export default Errorpage