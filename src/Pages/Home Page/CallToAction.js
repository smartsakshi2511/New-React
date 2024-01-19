import React from 'react'
import { Link } from 'react-router-dom'
 

const CallToAction = () => {
  return (
    <div>    <section id="call-to-action" class="wow fadeIn">
    <div class="container text-center">
      <h3>Find the "Team Member -  Advert you are looking for now!</h3>
      <p> Job postings from every sector are on Eleman.net, with 350 thousand companies and 20 thousand active job postings. Create your resume now, review the postings, apply and find the job you are looking for.</p>
      <Link class="cta-btn"  to='/createcv'>Create CV</Link>
    </div>
  </section></div>
  )
}

export default CallToAction