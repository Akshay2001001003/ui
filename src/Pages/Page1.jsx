import React from "react";
import "./Page1.css";
import Add from "../Components/Add";
import Testimonials from "../Components/Testimonials";
const Page1 = () => {
  return (
    <div className="page1">
      <div className="main-head">
        <Add />
      </div>
      <Testimonials />
    </div>
  );
};

export default Page1;
