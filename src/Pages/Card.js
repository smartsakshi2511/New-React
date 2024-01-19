import React from 'react';
 
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Pages'
import './Body.css';
 


const MyCard = () => {
  return (
    <section id="about">
    <div class="container">

      <header class="section-header">
        <h3 style={{textAlign:"center", fontWeight:"bold", margin:"10px"}}>How It Works</h3>
    
      </header>

      <div class="row about-cols">

        <div class="col-md-4 wow fadeInUp">
          <div class="about-col">
            <div class="img">
              <img src="http://surucucv.zcorp.co.in/assets/img/step-1.png" alt="" class="img-fluid"/>
             
            </div>
            <h2 class="title"> Create An Account </h2>
            <p>
            Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.
            </p>
          </div>
        </div>

        <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="about-col">
            <div class="img"style={{ placeItems:"center"}} >
              <img src="http://surucucv.zcorp.co.in/assets/img/step-2.png" alt="" class="img-fluid" style={{ placeItems:"center"}}/>
              
            </div>
            <h2 class="title"> Search Job</h2>
            <p>
              Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.
            </p>
          </div>
        </div>

        <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
          <div class="about-col">
            <div class="img">
              <img src="http://surucucv.zcorp.co.in/assets/img/step-3.png" alt="" class="img-fluid "/>
               
            </div>
            <h2 class="title"> Save & Apply</h2>
            <p>
              Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
 

  );
};

export default MyCard;
