import React from "react";
import Footer from "./Footer";
import NavBar from "../NavBar";

const AboutUs = () => {
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
                <div className="row">
                  <div className="col-md-6 border-left  ">
                    <h5>About Us </h5>
                    <hr />
                    <p className=" ">
                      <b>SurucuCv.Com </b>Job Seeking Drivers And Businesses
                      Looking For The Right Driver Is A Human Resources
                      Application That Brings Together. We Were Founded In 2007.
                      People In 2023, We Have Just Moved Into The Field. With
                      It, We Dominate The Entire Industry. We Were Founded Since
                      The Day We Have Always Strived To Break New Ground In The
                      Sector And Again By Signing A First In The Context Of
                      "Finding The Right Driver", Which Has Become A Bleeding
                      Wound In The Logistics/Transportation Industry We Have
                      Developed This Design To Contribute To Businesses And The
                      Industry.
                    </p>
                    <p>
                      <b>SurucuCv.Com</b> Drivers Looking For Work And Transport
                      In Any Industry Those Who Want To Work In The Field Of CV
                      Can Share Their Careers With The CVs They Have Created On
                      DriverCV. They Can Manage It Professionally. They Are Also
                      Shown The Way To Their Development. In Addition; For The
                      Services That Drivers Who Get The Right Job Will Benefit
                      From When Becoming A Member Of SurucuCV.Com They Do Not
                      Pay Any Fees
                    </p>
                    <p>
                      Surucucv.ComBased On The Philosophy Of "Drive The Right
                      For The Right Business" Aims To Bring Businesses And
                      Job-Seeking Drivers Together In The Quickest And Easiest
                      Way. With The Technology It Uses; Time And Effort In
                      Reaching The Right Driver Candidate For Businesses It Also
                      Saves Money By Saving.
                    </p>
                  </div>
                  <div className="col-md-6 border-start">
                    <h5 className="main-heading">
                      CVs Are Reviewed By Businesses In Two Ways{" "}
                    </h5>
                    <p>
                      <strong>1).</strong>Our Drivers Can Participate In The
                      Advertisements Published By Our Member Businesses Free Of
                      Charge. Apply And The Applications Are Reviewed By Our
                      Member Enterprises,
                    </p>
                    <p>
                      <strong>2).</strong>Our Member Businesses Can Identify The
                      Driver Candidate Using A "Quality Score" Or Data It
                      Examines The CVs That Emerge By Scanning From The Base
                      According To The Criteria They Determine. The "Quality
                      Score" Application Is Unique To Us
                    </p>
                    <p>
                      Surucucv.Com Started Its Activities In September 2022
                      SurucuCV.Com Has Been Closely Following The Developments
                      In Internet Technologies Since Its Establishment And
                      Transfers Them To Its Pages In The Most Accurate And Fast
                      Way.
                      <br />
                      Click Here. Creating An Individual CV Click Here. To Learn
                      About The Benefits Of Membership As A Business And To
                      Complete The Business Membership Information Form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default AboutUs;
