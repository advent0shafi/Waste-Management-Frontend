import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Admin/Home";
import ReqAuth from "../Authorisations/ReqAuth";
import Signing from "../page/Common/Signin";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signing />} />
        <Route element={<ReqAuth />}>
          <Route path="/" element={<Home />} />
        </Route>{" "}
      </Routes>
    </>
  );
};

export default AdminRoutes;
