import React from 'react'
import './NavBar.css'
import icon_blue from '../assets/icon_blue.png';

// const navbarLinks = [
//     {url: '/home', title: "Home"}
// ]

export const NavBar = ({navbarLinks}) => {
  return (
    <nav className='navbar'>
        {/* <ul className='navbar_list'>
            {navbarLinks.map((item) => {
                return (
                <li className='navbar_item' key={item.title}>
                    <a className='navbar_link' href={item.url}>
                        {item.title}
                    </a>
                </li>
                );
            })}
        </ul> */}
        <span className='navbar_logo'>
        <img src={icon_blue} alt='blue logo' className='logo_image' />
            LAZY ASSET
        </span>
    </nav>
  )
}