import React from 'react';

import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
// import Navbar from '../nav/Navbar';
import bg from '../../assets/monkey.jpg'
function Hero()
{
    return (
        <div className='hero'>
            <img  src={bg}  >
              
            </img>
            <div className='overlay'>
             <div className='content'>
                    <h1>Dịch vụ mua bán NFT hàng đầu việt nam</h1>
                   
                
             </div>

            </div>
            
        </div>
    )
}
export default Hero;