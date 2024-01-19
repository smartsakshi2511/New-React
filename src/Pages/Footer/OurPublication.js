import React from 'react'
import NavBar from '../NavBar';
import Footer from './Footer';

const OurPublication = () => {
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
                  <div className="col-md-6 border-left  ">
                    <h5>Our Publication</h5>
                    <hr />
                    <img src="http://surucucv.zcorp.co.in/assets/img/two-area-1-min.jpg" alt="" /> <br />
                     <h6 style={{fontWeight:"bold", margin:"20px"}}>Surucucv.com Magazine</h6>
                    <p style={{textAlign:"justify"}}>
                      
                        Surucucv Magazine, Which Aims To Share Information About Human Resources And The Business World, Meets Its Readers Every Two Months With Its Current And Comprehensive Content. Keeping Its Finger On The Pulse Of The Industry With A Circulation Of 15,000, Secretcv Magazine Offers A Rich Content Such As Current File Topics, Human Resources Processes Of Brands, New Brand Formations, And Articles From The Doyens Of The Industry.
                    </p>
                    <img src="http://surucucv.zcorp.co.in/assets/img/two-area-1-min.jpg" alt="" /> <br />
                     <h6 style={{fontWeight:"bold", margin:"20px"}}>Surucucv.com Advertisement Newspaper</h6>
                    <p style={{textAlign:"justify"}}>
                      
                    "Surucucv.Com" Advertisement Newspaper, Which Is A First In The Sector, Is Distributed Free Of Charge In The Streets And Squares At Certain Periods. The Content Of The Advertisement Newspaper, Which Is Distributed In The Busiest Squares And At The Metro And Ferry Port Exits In Istanbul, Ankara, Izmir, Bursa And Antalya, Includes The Most Up-To-Date Job Advertisements And Articles About Business Life That Will Attract The Reader's Attention
                    </p>
             
                  </div>
                  <div className="col-md-6 border-start">
                  <img src="http://surucucv.zcorp.co.in/assets/img/two-area-1-min.jpg" alt="" /> <br />
                     <h6 style={{fontWeight:"bold", margin:"20px"}}>Surucucv.com Advertisement Newspaper</h6>
                    <p style={{textAlign:"justify"}}>
                      
                    Secretcv.Com Has Undertaken The Printing And Sponsorship Of Books That Have Become The Reference Books Of The Business World. The Book "Labor Law", Where You Can Read The Updated Version Of Labor Law According To The Latest Laws With The Interpretation Of Lawyer Ergun İnce, Is Published By Atty. Lawyer, Where Occupational Health And Safety Are Examined In Depth. Ergun İnce And Dr. The Book "Legal And Organizational Dimensions Of Occupational Health And Safety" Written By M. Ruhi Gökmoğol Explains The Concept Of Mobbing, Which Is Known In Its Simplest Sense As "Intimidation" And Is Frequently Experienced In The Business World, By Av. The Book "Mobbing In Workplaces, A Fearful Dream" Written By Ergun İnce, The Book "Thanks To Me" Written By M. Rauf Ateş, Where You Can Read About The Important Events And People That Helped Successful CEOs Come To This Day,
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
    </div>
  )
}

export default OurPublication