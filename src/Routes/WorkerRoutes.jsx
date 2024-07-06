import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Worker/Home";
import { Order_Worker } from "../page/Worker/Order_Worker";
import WorkerReqAuth from "../Authorisations/WorkerReqAuth";

const WorkerRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WorkerReqAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/order-list" element={<Order_Worker />} />
        </Route>
      </Routes>
    </>
  );
};

export default WorkerRoutes;
