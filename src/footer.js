import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./style/footer.css"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Footer = () => {

    const [showAbout,setShowAbout]= useState(false);
    
    const [showPrivacy,setShowPrivacy]= useState(false);

    return (
        <>
            <div className="footer container">
                <div className="footerInfo container">
                <div className="Address container">
                    <img src="./images/blueName.png" className="logoImage" alt="logoImage" />
                    <p><b>Contact us: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="Link">
                    <h4>Links</h4>
                    <p>Stocks</p>
                    
                    <p>Services</p>
                    <p>Products</p>
                    <p>Testimonials</p>
                    <p>Blogs</p>
                    <p>Help Center</p>
                    <p>Calculators</p>
                </div>
                </div>


                <div className="download container">
                    <div className="quick-links container">
                        <p><b>Quick Links:</b></p>
                        <p>Open Account</p>
                        <p>Details</p>
                    </div>

                    <div className="topStocks">
                        <p><b>Some Top Stocks</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        
                    </div>

                    <div className="share container">
                        <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
                        <FontAwesomeIcon icon={faTelegram} className="icon telegram" />
                        <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
                    </div>
                </div>

                <div className="About">
                   
                        <div className="aboutDown" onClick={()=>setShowAbout(!showAbout)}>
                    <p><b>About us</b></p>
                    <FontAwesomeIcon icon={showAbout?faChevronUp: faChevronDown}  />
                        </div>

                        {showAbout && (
                        <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        
                    </div>)}   
                </div>

                <div className="About" >
                <div className="aboutDown" onClick={()=>setShowPrivacy(!showPrivacy)}>
                    <p><b>Privacy Policy</b></p>
                    <FontAwesomeIcon icon={showPrivacy?faChevronUp: faChevronDown} onClick={()=>setShowPrivacy(!showPrivacy)} />
                        </div>

                        {showPrivacy && (
                        <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                
                    </div>)} 
                </div>


            </div>
            <div className="copyright container">
                <p>&copy; 2024-2025 FAANG FINSERV. All right Reserved. Build in India with &hearts;</p>
            </div>

        </>
    )
};

export default Footer;