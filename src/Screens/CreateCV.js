import React from 'react'
import '../Pages/Body.css';
import NavBar from '../Pages/NavBar';
//  import { Carousel } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
	import Foooter from '../Pages/Footer/Footer'
// import NewNav from './NewNav';
//  import CarouselComponent from '../Pages/Terms';
// import ClientSection from '../Pages/Create CV/Cleint';


const CreateCV = () => {
  return (
    <>
	{/* <div><NewNav/></div> */}
    <div> 
		
        <div><NavBar/></div>
      <div class="clearfix"></div>
<div id="successMessage">
	</div>
<div id="errorMessage"></div>

 
 
<div className="clearfix"></div>
    
<section class="login-screen-sec">
	<div class="container">
	<div id="successMessage">
					</div>
		<div id="errorMessage">
					</div>
		<div class="login-screen">
			<a href="index"><img src="assets/img/Surucu-logo.png" class="img-responsive" alt=""/></a>
			<h4  style={{textAlign:"center"}}>Candidate Login</h4>
			<form method="post" enctype="multipart/form-data"/>
				<input type="text" class="form-control" name="username" placeholder="Useraname or Email"/>
				<input type="password" name="password" class="form-control" placeholder="Password"/>
				<button class="btn btn-login" name="form1" type="submit" >Login</button>
				<span>You Have No Account?  <Link to='/create-account'> Create An Account</Link> </span>
				<span><a href="forget-password.php"> Forget Password</a></span>
			 
		</div>
	</div>
</section>
<div class="clearfix"></div> </div>
    <section className='mt-5'>
    < Foooter/>
    </section>
	{/* <div><CarouselComponent/></div>
	<div><ClientSection/></div> */}
    </>
  )
}

export default CreateCV