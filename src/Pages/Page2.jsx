import React from "react";
import End from "../Assets/End.png";
import "./Page2.css";
import { Footer1, Footer2, Footer3 } from "../Assets/Foot";
import fb from "../Assets/fb.png";
import twitter from "../Assets/twitter.png";
import telegram from "../Assets/telligram.png";
import mail from "../Assets/mail.png";
import pinterest from "../Assets/pinterest.png";
import instagram from "../Assets/instagram.png";
import youtube from "../Assets/youtube.png";
import google from "../Assets/google.png";

const Page2 = () => {
  const images = {
    img1: fb,
    img2: twitter,
    img3: instagram,
    img4: pinterest,
    img5: google,
    img6: youtube,
    img7: telegram,
    img8: mail,
  };

  return (
    <div>
      <div>
        <img style={{ width: "100%", height: "100%" }} src={End} alt="img" />
      </div>
      <div className="ft-div">
        <footer>
          {[Footer1, Footer2, Footer3].map((footer, index) => (
            <div key={index} className="dd">
              <li1>{footer.h1}</li1>
              <ul>
                <li>{footer.i1}</li>
                <li>{footer.i2}</li>
                <li>{footer.i3}</li>
                <li>{footer.i4}</li>
                {footer.i5 && <li>{footer.i5}</li>}
              </ul>
            </div>
          ))}
          <div className="ft-rt">
            <div className=" heading-foot">Social Media</div>
            <div className="socialMedia">
              {Object.values(images).map((img, index) => (
                <div key={index} className="imges">
                  <img src={img} alt="img" />
                </div>
              ))}
            </div>
            <div>
              <div className=" heading-foot">Invite Friends</div>
              <div className="invite">
                <input className="inp" type="text" placeholder="Email Id" />
                <button className="btn1">Invite</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="ft-ft">&copy; Purple Cues Private Limited</div>
    </div>
  );
};

export default Page2;
