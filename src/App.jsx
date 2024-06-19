import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkerRoutes from "./Routes/WorkerRoutes";
import Home from "./Routes/Home";
import AdminRoutes from "./Routes/AdminRoutes";
import Signing from "./page/Common/Signin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/worker/*" element={<Signing />} />
          <Route path="/*" element={<AdminRoutes />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
