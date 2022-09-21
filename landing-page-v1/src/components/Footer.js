import React from 'react'
import './Footer.css'
import { FaTwitter, FaDiscord } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='footer'>
        <span className='footer_content'> 
        {/* <a href='#' className='links' target='_blank' rel="noreferrer noopener">
          <FaDiscord className='discord_logo' size={35} color='#5865F2'/>
        </a> */}
        
        <a href='https://twitter.com/LazyAsset' className='links' target='_blank' rel="noreferrer noopener">
          <FaTwitter className='twitter_logo' size={35} color='#1DA1F2' />
        </a>
        </span>
    </footer>
  )
}