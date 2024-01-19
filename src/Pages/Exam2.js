import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import img3 from "../Assests/img3.jpg";
import img2 from '../Assests/img2.jpg';
import img5 from '../Assests/img5.jpg';
import img6 from '../Assests/img6.jpg';


const Exam2 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div> 
<Carousel responsive={responsive}>
  <div className='card-example'> 
   <img src={img3} alt=""  className='product-img'/>
   <h2> Add-1 </h2>
   <p className="price">$26</p>
   <p>some description about product</p>
   <p>
    <button>Click for more info</button>
   </p>
  </div>
  <div className='card-example'> 
   <img src={img5} alt=""  className='product-img'/>
   <h2> Add-1 </h2>
   <p className="price">$26</p>
   <p>some description about product</p>
   <p>
    <button>Click for more info</button>
   </p>
  </div>
  <div className='card-example'> 
   <img src={img2} alt=""  className='product-img'/>
   <h2> Add-1 </h2>
   <p className="price">$26</p>
   <p>some description about product</p>
   <p>
    <button>Click for more info</button>
   </p>
  </div>
  <div className='card-example'> 
   <img src={img3} alt=""  className='product-img'/>
   <h2> Add-1 </h2>
   <p className="price">$26</p>
   <p>some description about product</p>
   <p>
    <button>Click for more info</button>
   </p>
  </div>
  <div className='card-example'> 
   <img src={img6} alt=""  className='product-img'/>
   <h2> Add-1 </h2>
   <p className="price">$26</p>
   <p>some description about product</p>
   <p>
    <button>Click for more info</button>
   </p>
  </div>
</Carousel>;
    </div>
  )
}

export default Exam2

