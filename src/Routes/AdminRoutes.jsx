import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Admin/Home";
import ReqAuth from "../Authorisations/ReqAuth";
import Signing from "../page/Common/Signin";
import Scrap from "../page/Admin/Scrap";
import Signup from "../page/Common/SIgnup";
import UserInfo from "../page/Admin/UserInfo";
import WorkerList from "../page/Admin/WorkerList";
import OrderList from "../page/Admin/Order-List";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signing />} />
        <Route path="/signup" element={<Signup/>} />
        <Route element={<ReqAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/scrap" element={<Scrap/>} />
          <Route path="/user-list" element={<UserInfo/>} />
<Route path="/worker-list" element={<WorkerList/>} />
<Route path="/order-list" element={<OrderList/>} />

        </Route>{" "}
      </Routes>
    </>
  );
};

export default AdminRoutes;
