import React from 'react'
import LogoSvg from '../LogoSvg/LogoSvg'
import './Header.scss'

const Header = (props) => {
    return (
        <header className="header-wrapper">
             <div className="logo-wrapper">
             <LogoSvg />
             </div>
                <input type="text" className="search" />
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