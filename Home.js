import React from 'react'
import NavBar from '../Pages/NavBar';
import Footer from '../Pages/Footer/Footer';
import Body from '../Pages/Card';
import Carousal from '../Pages/Home Page/Carousal';
import ProfileWeServe from '../Pages/Home Page/ProfileWeServe';
import HireExpertDriver from '../Pages/Home Page/HireExpertDriver';
import Advertisement from '../Pages/AddPages/Advertisement';
import OurClient from '../Pages/Home Page/OurClient';
import Testimonials from '../Pages/Home Page/Testimonials';
// import Example1 from '../Pages/Example1';
import Exam2 from '../Pages/Exam2'
import CallToAction from '../Pages/Home Page/CallToAction';
import Caro from '../Pages/ExamPages/CaroExam';
import Featuress from '../Pages/Home Page/Featuress';
import FlipBox from '../Pages/AddPages/SmallAdds'
import LargeAdd from '../Pages/AddPages/LargeAdd';
import JobCard from '../Pages/ExamPages/Jobcard';
// import JobList from '../Pages/ExamPages/JobList';
import SCard from '../Pages/Sider/Scard';
 
// import Explore from '../Pages/Sider/Explore';
 
//  import WithHeaderExample from '../Pages/Home Page/MatchJobs'

export default function Home() {
  return (
    <div>
        <Carousal/> 
        <div><Featuress/></div>
       
       <div><Body/></div>
       <div><ProfileWeServe/></div>
       <div><HireExpertDriver/></div>
       <div><CallToAction/></div>
       <div><OurClient/></div>
       <div><Testimonials/></div>
       {/* <div><Example1/></div> */}
        <JobCard/> 
       {/* <div><WithHeaderExample/></div>*/}
       <div><FlipBox/></div>
     <div><SCard/></div>
     {/* <div><Explore/></div> */}
         <div><Exam2/></div>
         <div><section><LargeAdd/></section></div>
       <div><section><Advertisement/></section></div>
       <div><Caro/></div>
     
        <div><Footer/></div>
       
        
    </div> 
  );
}


// import React from "react";


// function Rtl() {

//   return (
//     <div className="slider-container">
//       <h2>Right to Left</h2>
//      
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//      
//     </div>
//   );
// }

// export default Rtl;

