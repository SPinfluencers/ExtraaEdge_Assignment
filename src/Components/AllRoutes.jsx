import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Edited from './Edited'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/edited'>{<Edited/>}</Route>
        </Routes>
    </div>
  )
}

export default AllRoutes