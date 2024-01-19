import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Login from './Screens/Login';
import FindJob from './Screens/FindJob.js';
import FindDriver from './Screens/FindDriver.js';
import CreateCV from './Screens/CreateCV.js';
import Contact from './Screens/Contact.js';
import AboutUs from './Pages/Footer/AboutUs.js';
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy.js';
 import Terms from './Pages/Terms.js'
 import FAQ from './Pages/Footer/FAQ.js'
import Vision from './Pages/Footer/Vision.js';
import Signup from './Screens/Signup.js';
import CreateAccount from './Pages/Create CV/CreateAccount.js';
import OurPublication from './Pages/Footer/OurPublication.js';
function App(){
  return (
    <> 
     <Router>
         <div className='w-100%' style={{width:"100"}}>
          <Routes>
            <Route exact path='/' element= {<Home/>} />
       
            <Route exact path='/findjob' element= {<FindJob/>} />
            <Route exact path='/finddriver' element= {<FindDriver/>}/>
            <Route exact path='/createcv' element= {<CreateCV/>} />
            <Route exact path='/contact' element= {<Contact/>} />
            <Route exact path='/login' element= {<Login/>} />
            <Route exact path='/signup' element= {<Signup/>} />
            <Route exact path='/about-us' element= {<AboutUs/>} />

            <Route exact path='/privacy' element= {<PrivacyPolicy/>} />
            <Route exact path='/terms' element= {<Terms/>} />
            <Route exact path='/faq' element= {<FAQ/>} />
            <Route exact path='/vision' element= {<Vision/>} />
            <Route exact path='/create-account' element= {<CreateAccount/>} />
            <Route exact path='/our-publication' element={<OurPublication/>}/>
            



          </Routes>
         </div>

     </Router>
    </>
  );

}

export default App;