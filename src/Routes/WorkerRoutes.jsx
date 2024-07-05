import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../page/Worker/Home';
import { Order_Worker } from '../page/Worker/Order_Worker';

const WorkerRoutes = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-list" element={<Order_Worker />} />

      </Routes>
    </>
  )
}

export default WorkerRoutes