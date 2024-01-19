// // ClientSection.js

// import React from 'react';
// import { useSpring, animated } from 'react-spring';
 

// const ClientSection = () => {
//   // Animation for the client section
//   const clientSectionAnimation = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     delay: 500, // Delay the animation for 500 milliseconds
//   });

//   // Animation for the form
//   const formAnimation = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(50px)' },
//     delay: 800, // Delay the form animation
//   });

//   return (
//     <animated.div style={clientSectionAnimation} className="client-section">
//       <div className="client-content">
//         <h2>Our Clients</h2>
//         <p>See what our clients are saying about us!</p>
//       </div>
//       <animated.form style={formAnimation} className="client-form">
//         <h3>Contact Us</h3>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Your Name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Your Email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Your Message"></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </animated.form>
//     </animated.div>
//   );
// };

// export default ClientSection;
