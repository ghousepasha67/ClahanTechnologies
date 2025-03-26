import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaArrowRight, FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaWindows } from 'react-icons/fa';
import { logo, logoBlue } from "./ImagePath";
function Header(params) {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <main class="main" id="top">
                <nav class="navbar navbar-light sticky-top" data-navbar-darken-on-scroll="900">
                    <div class="container pt-2"><a href="#"> <img src={logo} alt="..." /></a>
                        <div class="navbar-nav ms-auto">

                            <button class="btn btn-secondary" onClick={() => setLgShow(true)}> Home  <span className='px-2'><FaWindows></FaWindows></span></button>

                        </div>
                        <div class="navbar-nav ms-auto">
                            <button class="btn btn-secondary">Get in touch<span className='px-2'><FaArrowRight></FaArrowRight></span></button>
                        </div>
                    </div>
                </nav>
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
                            <h3 className='text-grey py-4 txt-col'>Start a conversation with <a href="mailto:info@clahan.com">info@clahan.com</a></h3>
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
                            <h3 className='text-grey text-start txt-col'>Also Available On</h3>
                            <span className='p-2 font-size-xl'><FaGoogle></FaGoogle></span>
                            <span className='p-2 font-size-xl'><FaLinkedin></FaLinkedin></span>
                            <span className='p-2 font-size-xl'><FaFacebook></FaFacebook></span>
                            <span className='p-2 font-size-xl'><FaTwitter></FaTwitter></span>
                        </div>
                    </Modal.Footer>
                </Modal>

            </main>

        </div>
    )
}

export default Header;