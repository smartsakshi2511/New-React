import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/Body.css'
 

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    <img
    src="http://surucucv.zcorp.co.in/assets/img/vendor-2.jpg"
    alt=""
  />,
  <div class="testimonial-item">
          <img src="img/testimonial-2.jpg" class="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <img src="img/quote-sign-left.png" class="quote-sign-left" alt=""/>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <img src="img/quote-sign-right.png" class="quote-sign-right" alt=""/>
          </p>
        </div>,
  <img
    src="http://surucucv.zcorp.co.in/assets/img/vendor-4.jpg"
    alt=""
  />,
  <div class="testimonial-item">
  <img src="img/testimonial-2.jpg" class="testimonial-img" alt=""/>
  <h3>Sara Wiln</h3>
  <h4>Designer</h4>
  <p>
    <img src="img/quote-sign-left.png" class="quote-sign-left" alt=""/>
    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
    <img src="img/quote-sign-right.png" class="quote-sign-right" alt=""/>
  </p>
</div>,
  <div class="testimonial-item">
          <img src="img/testimonial-2.jpg" class="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <img src="img/quote-sign-left.png" class="quote-sign-left" alt=""/>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <img src="img/quote-sign-right.png" class="quote-sign-right" alt=""/>
          </p>
        </div>,
  <img
    src="http://surucucv.zcorp.co.in/assets/img/vendor-4.jpg"
    alt=""
  />,
  <img
    src="http://surucucv.zcorp.co.in/assets/img/vendor-8.jpg"
    alt=""
  />,
  <div class="testimonial-item">
          <img src="img/testimonial-2.jpg" class="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <img src="img/quote-sign-left.png" class="quote-sign-left" alt=""/>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <img src="img/quote-sign-right.png" class="quote-sign-right" alt=""/>
          </p>
        </div>
             
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change 3000 to the desired autoplay interval in milliseconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div id="clients-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
