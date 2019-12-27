import React from 'react'
import LogoSvg from '../LogoSvg/LogoSvg'
import Nav from '../Nav/Nav'
import './Header.scss'

const Header = (props) => {
    return (
        <header className="header-wrapper">
            <Nav />
             <div className="logo-wrapper">
             <LogoSvg />
             </div>
                <input type="text" className="search" placeholder="Search" />
                <div className="sub-header">
                    <div>
                        <p>
                          Making it possible
                        </p>
                        <p>Find Out NOW!</p>
                    </div>
                </div>
        </header>
    )
}

export default Header