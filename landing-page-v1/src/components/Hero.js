import React from 'react';
import './Hero.css';
import icon_blue from '../assets/icon_blue.png';

export const Hero = ({imageSrc}) => {
    return (
        <div className='hero'>
            <div className='column_left'>
                <img src={imageSrc} alt='Blue Ripple' className='hero_image' />
            </div>
            <div className='column_middle' >
            {/* <span className='logo'>
                <img src={icon_blue} alt='blue logo' className='logo_image' />
                LAZY ASSET
            </span> */}
            {/* <h1 className='hero_title'>NFTs made simple.</h1> */}
                <h1 className='hero_title' id='textCycle'></h1>
            </div>
            <div className='column_right'>

            </div>
        </div>
    )
}