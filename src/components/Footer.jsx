import React from 'react'
import logo from '../assests/Logo.png'
import facebook from '../assests/Facebook Icon.svg'
import twitter from '../assests/Twitter Icon.svg'
import youtube from '../assests/icons8-youtube.svg'
function Footer() {
  return (
    <footer>
      <div class="logob">
        <img src={logo} draggable="false" alt="logo" />
      </div>
      <div class="socials">
        <img src={facebook} draggable="false" alt="fb" />
        <img src={twitter} draggable="false" alt="tw" />
        <img src={youtube} draggable="false" alt="yt" />
      </div>
    </footer>
  )
}

export default Footer