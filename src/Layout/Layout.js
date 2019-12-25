import React from 'react'
import Header from './Header/Header'
import './Layout.scss'

const Layout = (props) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <section>
                <h1>showoff</h1>
            </section>
        </div>
    )
}

export default Layout