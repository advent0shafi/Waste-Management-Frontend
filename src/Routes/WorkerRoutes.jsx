import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';

const WorkerRoutes = () => {
  return (
    <>
       <Routes>
          <Route path="/login" element={<Home />} />
      </Routes>
    </>
  )
}

export default WorkerRoutes