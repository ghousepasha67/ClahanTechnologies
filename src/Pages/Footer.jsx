import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterLogo } from "./ImagePath";

function Footer(params) {
    return (

        <div>
            <footer class="py-5 bg-footer">
                <div class="container-fluid width-1000">
                    <div class="row">

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <img src={FooterLogo} alt="footer" />
                                <div class="row">
                                    <div class="copyright justify-item-center py-3">
                                        <div className='py-2 text-start'>
                                            <span className='p-2 font-size-xl'><FaGoogle></FaGoogle></span>
                                            <span className='p-2 font-size-xl'><FaLinkedin></FaLinkedin></span>
                                            <span className='p-2 font-size-xl'><FaFacebook></FaFacebook></span>
                                            <span className='p-2 font-size-xl'><FaTwitter></FaTwitter></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Services</h5>
                                <ul class="menu-list list-unstyled">

                                    <li class="menu-item">
                                        <a>Multi Cloud Development</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Multi Cloud Services</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Multi Cloud Operations</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Machine Learning & AI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Customer Service</h5>
                                <ul class="menu-list list-unstyled">

                                    <li class="menu-item">
                                        <a>Multi Cloud Development</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Multi Cloud Services</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Multi Cloud Operations</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>Machine Learning & AI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h5 class="widget-title">Customer Service</h5>
                                <ul class="menu-list list-unstyled">
                                    <li class="menu-item">
                                        <a>+91 8899008877</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>hello@clahan.com</a>
                                    </li>
                                    <li class="menu-item">
                                        <a>33 Radius Lp, Bayswater WA 6053, Australia</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}
export default Footer;