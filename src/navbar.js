import "./style/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faFileCircleCheck, faList12, faSearch, faCoins, faBars, faClose, faArrowCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {AnimatePresence, motion, spring } from "framer-motion";

const Menu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding: 20px 0 0 0;
  gap: 0;

  p {
    font-size: small;
    font-weight: 700;
    color: rgb(57, 12, 57);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s ease-in-out;
  }

  &:hover p {
    visibility: visible;
    opacity: 1;
  }

  svg {
    color: transparent;
    stroke: black;
    stroke-width: 20px; 
    transition: color 0.3s ease, stroke 0.3s ease;
  }

  &:hover svg {
    stroke: rgb(57, 12, 57);   
  }
`;


const Navbar = () => {

    const [user, setUser] = useState(null);
    const nevigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="Navbar container">

                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-hemburger">
                    <FontAwesomeIcon className="menu-hemburger-icon" icon={faBars} />
                </div>

            <AnimatePresence>
                {isMenuOpen && (<motion.div className='menuBar-container' initial={{ x: "-100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ type: spring, duration: 2 }} >
                    <div className='menu-header'>
                        <div className="logo"> Website </div>
                        <FontAwesomeIcon className="menu-below-icon" onClick={()=>setIsMenuOpen(!isMenuOpen)} icon={faClose} />
                    </div>

                    <div className='menu-header'>
                        <div className='menu-text'> Home</div>
                        <FontAwesomeIcon className="menu-below-icon" icon={faChevronDown} />
                    </div>

                    <div className='menu-header'>
                        <div className='menu-text'> Chart</div>
                        <FontAwesomeIcon className="menu-below-icon" icon={faChevronDown} />
                    </div>

                    <div className='menu-header'>
                        <div className='menu-text'> Document</div>
                        <FontAwesomeIcon className="menu-below-icon" icon={faChevronDown} />
                    </div>

                    <div className='menu-header'>
                        <div className='menu-text'> Transaction</div>
                        <FontAwesomeIcon className="menu-below-icon" icon={faChevronDown} />
                    </div>

                    <div className='menu-header'>
                        <div className='menu-text'> Discover</div>
                        <FontAwesomeIcon className="menu-below-icon" icon={faChevronDown} />
                    </div>


                </motion.div>)}
                </AnimatePresence>

                <div className="logo">
                    Website
                </div>



                <div className="menus">

                    <Menu>
                        <FontAwesomeIcon icon={faHome} />
                        <p >Home</p>
                    </Menu>


                    <Menu>
                        <FontAwesomeIcon icon={faList12} />
                        <p >Chart</p>
                    </Menu>

                    <Menu>
                        <FontAwesomeIcon icon={faFileCircleCheck} />
                        <p >Document</p>
                    </Menu>

                    <Menu>
                        <FontAwesomeIcon icon={faCoins} />
                        <p >Transection</p>
                    </Menu>

                    <Menu>
                        <FontAwesomeIcon icon={faCompass} />
                        <p >Discover</p>
                    </Menu>

                </div>


                <form className="search-box">
                    <input type="text" placeholder="Search PreIPO, Upcoming IPO, StartUps and Founds" />
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                </form>


                <div className="login container">
                    {user ?
                        <div>

                        </div> :

                        <div>
                            <button className="button" >Login</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;