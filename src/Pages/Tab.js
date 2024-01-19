import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";
import email_icon from '../Assests/Icons/email_icon.png';
import password_icon from '../Assests/Icons/password_icon.png';
import user_icon from '../Assests/Icons/user_icon.png';

export default function Tab({ tabData, field, setField }) {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          textAlign: "center",
        }}
        className="flex bg-richblack-800 p-1 
            gap-x-1 my-6 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
        <div>
          <div className="container-tab">
            <div className="header">
              <div className="text"> Sign Up</div>
              <div className="underline"></div>
              <div className="inputs">
                <div className="input">
                    <img src={email_icon}alt="" />
                    <input type="text"  placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="email"  placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password"  placeholder="password"/>
                </div>
              </div>
              <div className="forgot-password">Lost Password <span>Click here</span></div>
              <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
              </div>
            </div>
          </div>
        </div>
         
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
