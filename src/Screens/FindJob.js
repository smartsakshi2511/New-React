import React from "react";
import NavBar from "../Pages/NavBar";
import Car1 from "../Pages/Car1";
import Exam2 from "../Pages/Exam2";
import Footer from "../Pages/Footer/Footer";
import Hero_findJob from "../Pages/Find Job/Hero_findJob";
 import Job from "../Pages/Find Job/Position_findJob";
import Card_findJob from "../Pages/Find Job/Card_findJob";
import "../Pages/Body.css"
import FilterButton from "../Pages/Find Job/Filter"

const FindJob = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div><Hero_findJob/></div>
      <div><FilterButton/></div>
     <div><Job/></div>
      <div>
        <Exam2 />
      </div>
      <div><Card_findJob/></div>
      <div>
        <Car1 />
      </div>
      <div className="p-10 m-10">
        <Footer />
      </div>
    </>
  );
};

export default FindJob;
