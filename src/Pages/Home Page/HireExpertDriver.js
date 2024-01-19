import React from 'react';
// import { Card, Row, Col} from 'react-bootstrap';


const HireExpertDriver = () => {
  return (
    <div> 
        <section id="portfolio"  className="section-bg" >
      <div className="container">

        <header className="section-header">
          <h3 className="section-title " style={{ textAlign:"center"}} > Hire Expert Driver </h3>
        </header>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-filters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Bike Driver</li>
              <li data-filter=".filter-card">car driver</li>
              <li data-filter=".filter-web">truck driver</li>
            </ul>
          </div>
        </div>
 
        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="http://surucucv.zcorp.co.in/assets/img/Abhay.jpg" className="img-fluid" alt=""/>
                <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>
  
              <div className="portfolio-info">
                <h4><a href="/">Mr Abhay Kumar</a></h4>
                <p>Car Driver</p>
              </div>
            </div>
          </div>
 
          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="http://surucucv.zcorp.co.in/assets/img/temp.jpg" className="img-fluid" alt=""/>
                <a href="http://surucucv.zcorp.co.in/assets/img/temp.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="/">Denial Disroy</a></h4>
                <p>Truck Driver</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="http://surucucv.zcorp.co.in/assets/img/client-3.jpg" className="img-fluid" alt=""/>
                <a href="img/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="#\/">Nancy D. Walker </a></h4>
                <p>Bike Driver</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="http://surucucv.zcorp.co.in/assets/img/client-2.jpg" className="img-fluid" alt=""/>
                <a href="img/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="/">Larry A.Sherrode</a></h4>
                <p>Rickshaw Driver</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="img/portfolio/web2.jpg" className="img-fluid" alt=""/>
                <a href="img/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="/">Mr Ajay Singh</a></h4>
                <p>Tanker Driver</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="img/portfolio/card3.jpg" className="img-fluid" alt=""/>
                <a href="img/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                <a href="/" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="/"> Denial Walker</a></h4>
                <p>Tanker Driver</p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
    </div>
  )
}

export default HireExpertDriver