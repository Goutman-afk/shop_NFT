 import React, {useState} from 'react';
 import{BiSearch} from 'react-icons/bi';
 import{BsPerson} from 'react-icons/bs';
 import { HiOutlineMenuAlt4 } from 'react-icons/hi'
 import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
 import './NavbarStyles.css'
 function Navbar(){



    const [nav, setNav] = useState(false);
    const handleNav = () => setNav (!nav);
     return (
            <div className={nav ? 'navbar ': 'navbar'}>
                <div className="logo"> 
                <h2>Logo</h2>
                </div>
                    <ul className="nav-menu"> 
                       <li>Trang chủ </li>
                       <li>NFT pro </li>
                       <li>NFT ko pro  </li>
                       
                        </ul>
                <div className="nav-icons"> 
                <BiSearch className='icon' style={{magrinRight: '1rem'}} />
                <BsPerson  className='icon' /> 

                </div>
                <div className="hamburger" onClick={handleNav}> 
                <HiOutlineMenuAlt4 className='icon'   />
                </div>
                <div   className={nav ? 'mobile-menu active':'mobile-menu'} > 
                <ul className="mobile-nav">
                        <li>Trang chủ </li>
                       <li>Điểm đến </li>
                       <li>Du lịch  </li>
                       <li>Đặt Tour </li> 
                       <li>Khám phá</li>
                    </ul>
                    <div className='mobile-menu-bottom'>
                        <div className='menu-icons'>
                            <button> Search</button>
                            <button> Account</button>
                        </div>
                        <div className='social-icons'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                        </div>

                    </div>
            </div>
            </div>
           
     )
 }
 export default Navbar;