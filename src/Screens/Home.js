import React from 'react'
import NavBar from '../Pages/NavBar';
import Footer from '../Pages/Footer/Footer';
import Body from '../Pages/Card';
import Carousal from '../Pages/Home Page/Carousal';
import ProfileWeServe from '../Pages/Home Page/ProfileWeServe';
import HireExpertDriver from '../Pages/Home Page/HireExpertDriver';
import Advertisement from '../Pages/Advertisement';
import OurClient from '../Pages/Home Page/OurClient';
import Testimonials from '../Pages/Home Page/Testimonials';
// import Example1 from '../Pages/Example1';
import Exam2 from '../Pages/Exam2'
import CallToAction from '../Pages/Home Page/CallToAction';
 
//  import WithHeaderExample from '../Pages/Home Page/MatchJobs'

export default function Home() {
  return (
    <div>
        <div><NavBar/></div>
        <div><Carousal/></div>
       <div><Body/></div>
       <div><ProfileWeServe/></div>
       <div><HireExpertDriver/></div>
       <div><CallToAction/></div>
       <div><OurClient/></div>
       <div><Testimonials/></div>
       {/* <div><Example1/></div> */}
     
       {/* <div><WithHeaderExample/></div>  */}
      
         <div><Exam2/></div>
       <div><Advertisement/></div>

        <div><Footer/></div>
       
        
    </div> 
  );
}
