import React from "react";
import "./testimonial.css";
import quote from "../Assets/quote.png";
import arrow1 from "../Assets/arrow1.png";
import mic from "../Assets/mic.png";
import Ellipse from "../Assets/Ellipse.png";
const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="testi-header">
        <div>
          <img src={quote} alt="img" className="quote" />
        </div>
        <div>Testimonials</div>
      </div>
      <div className="testi-middle">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </div>
      <div className="testi-fotter">
        <div className="testi-f1">
          <div className="crcl">
            <img src={arrow1} alt="img" />
          </div>
          <div className="play">
            <div className="player">
              <div className="dt"></div>
            </div>
          </div>
          <div className="testi-f2">0.0</div>
          <div className="testi-f3">
            <img
              src={mic}
              alt=""
              style={{ marginTop: "30px", marginLeft: "-10px" }}
            />
          </div>
        </div>
        <div className="testi-f4">
          <img src={Ellipse} alt="img" />
          <div>
            <div style={{ color: "#8064A2", fontSize: "18px" }}>
              Subha Nagrajan
            </div>
            <div style={{ color: "#0096C8", fontSize: "14px" }}>
              Classic Dancer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
