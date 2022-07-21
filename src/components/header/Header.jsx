import React from 'react'
import headerLogo from './HeaderLogo.svg'

function Header (props) {
  return (
    <header>
        <div clasName="header_logo_container">
        <img src={headerLogo} className="header_logo" />
        </div>
        <div className="search_bar_container">
          <input type="search" id="site-search" placeholder="Search . . ."/>
        </div>
    </header>
  )
}

export default Header;