
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import './App.css';
import './assets/css/theme.css';
import './assets/vendors/swiper/swiper-bundle.min.css';
import Adventure from './Pages/Adventure';
import Content from './Pages/Content';
import Footer from './Pages/Footer';
import GetStarted from './Pages/GetStarted';
import Interface from './Pages/Interface';
import MultiCloud from './Pages/MultiCloud';
import OurService from './Pages/OurService';
import OurStory from './Pages/OurStory';
import ReadOurCase from './Pages/ReadOurCase';
// import Spline from './Pages/Spline';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaArrowRight, FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaWindows } from 'react-icons/fa';
import { logo, logoBlue } from "./Pages/ImagePath";
import TrustedPartners from './Pages/TrustedPartners';



function App() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="App">
        
      <main class="main" id="top">
        <nav class="navbar navbar-light sticky-top box-shadow" data-navbar-darken-on-scroll="900">
            <div class="container pt-2"><a href="#"> <img src={logo} alt="..." /></a>
                <div class="navbar-nav ms-auto">
                    <button class="btn btn-secondary" onClick={() => setLgShow(true)}> Home  <span className='px-2'><FaWindows></FaWindows></span></button>
                </div>
                <div class="navbar-nav ms-auto">
                    <button class="btn btn-secondary">Get in touch<span className='px-2'><FaArrowRight></FaArrowRight></span></button>
                </div>
            </div>
        </nav>
        <Content></Content> 
        <Interface></Interface> 
        <OurStory></OurStory> 
        <OurService></OurService> 
        {/* <Header></Header>  */}
        {/* <Content></Content>  */}
        <MultiCloud></MultiCloud> 
        <TrustedPartners></TrustedPartners>
        <ReadOurCase></ReadOurCase> 
        <Adventure></Adventure> 
        <GetStarted></GetStarted> 
        <Footer></Footer> 
        {/* <Spline></Spline> */}
        </main>


        <Modal
                    size="xl"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <img src={logoBlue} alt="..." />
                            <br></br>
                            <h3 className='text-grey py-4'>Start a conversation with <a href="mailto:info@clahan.com">info@clahan.com</a></h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <nav class="navbar">
                            <div class="container-fluid justify-content-center">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About Us</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="dropdown-item" href="#">Multi-Cloud Development</a></li>
                                            <li class="nav-item"><a class="dropdown-item" href="#">Service 2</a></li>
                                            <li class="nav-item"><a class="dropdown-item" href="#">Service 3</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact Us</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Carrer</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Case Studies</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-start'>

                        <div className='py-2'>
                            <h3 className='text-grey text-start'>Also Available On</h3>
                            <span className='p-2 font-size-xl'><FaGoogle></FaGoogle></span>
                            <span className='p-2 font-size-xl'><FaLinkedin></FaLinkedin></span>
                            <span className='p-2 font-size-xl'><FaFacebook></FaFacebook></span>
                            <span className='p-2 font-size-xl'><FaTwitter></FaTwitter></span>
                        </div>
                    </Modal.Footer>
                </Modal>
   
    </div>
  );
}

export default App;
