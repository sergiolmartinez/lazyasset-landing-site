import React from 'react'
import './Footer.css'
import { FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='footer'>
        <span className='footer_content'>
        <FaTwitter className='twitter_logo' size={23} color='#1DA1F2' />
        <a href='https://twitter.com/LazyAsset' className='twitter_link' target='_blank' rel="noreferrer noopener">@lazyasset</a>
        </span>
    </footer>
  )
}