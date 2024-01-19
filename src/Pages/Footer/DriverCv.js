import React from 'react'
import NavBar from '../NavBar'
import Footer from './Footer';

const DriverCv = () => {
  return (
    <div> 
         <>
    <div>
      <div>
        <NavBar />
      </div>
      <section className="section">
        <div className="container pt-3">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-12 border-left  ">
                <h4>DriverCV COKIES POLICY</h4>
                  <hr />
                 <h6>WHAT IS A COOKIE?</h6>
                  <p className="justify">
                  Cookies Are Set On Your Computer By Websites You Visit Through Browsers (Or Other Devices Such As Smartphones Or Tablets), Usually Recorded In Letters And Are Very Small Text Files Consisting Of Numbers. Cookies Are The Name Of The Visitors, Does Not Contain Personal Data Such As Gender Or Address
                  <p>Cookies Are Created By Servers That Manage The Website You Are Visiting. This In This Way, The Server Can Understand When The Visitor Visits The Same Site. Cookies ID Cards To Site Owners Showing That The Same Visitor Has Visited The Site Again Can Be Likened</p>
                  </p>
                  <h5>DRIVERCV HOW ARE COOKIES USED?</h5>
                  <h6>DriverCV cookiesi</h6>
                  <p>
                  We Aim Not Only To Bridge The Gap Between Employers And Drivers, But Also To Organise This Informal Sector Of Work To A Certain Extent. We Envisage The Creation Of Competitive Wages For Drivers, The Reduction Of Immigration, The Protection And Elimination Of Drivers From All Kinds Of Abuse, The Opening Of New Workplaces For Drivers, The Digitalization Of Recruitment And Placement Processes. We Aim To 'Establish A System Where The Untapped Potential Of Drivers Is Fairly Recognised By Employers'.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <Footer />
      </section>
    </div>
  </>
      </div>
  )
}

export default DriverCv;