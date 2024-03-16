import React from "react";
import Addimg from "../Assets/Addimg.png";
import "./Add.css";
const Add = () => {
  return (
    <div className="add1">
      <div className="AddHeader">
        <div>
          <img src={Addimg} alt="img" />
        </div>
        <div style={{ fontSize: "24px", marginLeft: "12px" }}>Add your own</div>
      </div>
      <div className="cntnt">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or
        event tickets? Or, you know someone who should be on hobbycue? Go ahead
        and Add your Own page
      </div>
      <div className="btn-container">
        <button className="btn">Add New</button>
      </div>
    </div>
  );
};

export default Add;
