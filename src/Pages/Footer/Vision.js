import React from 'react'
import NavBar from '../NavBar'
import Footer from './Footer';

const Vision = () => {
  return (
    <>
    <div>
      <div>
        <NavBar />
      </div>
      <section className="section">
        <div className="container pt-3">
          <div className="card shadow">
            <div className="card-body">
              <div className="row" style={{textAlign:"justify"}}>
                <div className="  border-left  ">
                  <h5 style={{textAlign:"center"}}>CHANGER/DEVELOPER (THE CHANGER) </h5>
                  <hr />
                  <h5> </h5>
                  <p className="justify" style={{textAlign:"justify"}}>
                  DRIVER CV, Professional And Entry-Level Chauffeur/Driver Job Positions Is A Mobile And Web-Based Start-Up That Develops Recruitment Methods. Professional And Connecting Entry-Level Job Seekers With A Seamless Connection Through Our Web And Mobile Technology By Linking Them Together In Such A Way That Recruiters/Employers Are Given The Traditional Method We Provide Ease Of Hiring And Changing.
                  </p>
                  <h5 style={{textAlign:"center"}}>VISION</h5>
                  <p>
                  We Aim Not Only To Bridge The Gap Between Employers And Drivers, But Also To Organise This Informal Sector Of Work To A Certain Extent. We Envisage The Creation Of Competitive Wages For Drivers, The Reduction Of Immigration, The Protection And Elimination Of Drivers From All Kinds Of Abuse, The Opening Of New Workplaces For Drivers, The Digitalization Of Recruitment And Placement Processes. We Aim To 'Establish A System Where The Untapped Potential Of Drivers Is Fairly Recognised By Employers'.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bt-10'>
        <Footer />
      </section>
    </div>
  </>
  );
};

export default Vision;