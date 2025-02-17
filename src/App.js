import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUpUser } from "./Assets/SignUpUser";
import { Layout } from "./pages/layout";
import { SliceAdminData } from "./store/SliceAdminData";
const App = () => {
  return (
    <SliceAdminData>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />} >
       <Route index element={<Home />} />
       <Route path="admin-dashboard" element={<SignUpUser />} />
       </Route>
      </Routes>
    </BrowserRouter>
    </SliceAdminData>
  );
};

export default App;
