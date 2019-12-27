import React from 'react'
import {Link} from 'react-router-dom'
import MenuSvg from './MenuSvg'
import './Nav.scss'

const Navbar = props => {
    return {
        
    }
}

export default class Nav extends React.Component {
    state = {
        navbarOpen: false
    };
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
      }
    
    render() {
        return (
            <nav>
                <div className="mobile-size" onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}>
                {this.state.navbarOpen ? "true" : "false"}
                    <MenuSvg />
                </div>
            </nav>
        )
    }
}

/*
class App extends React.Component {
	state = {
		shown: true,
	};
		
	render() {		
		return (
			<div>
				<h2>this.state.shown = {this.state.shown ? "true" : "false"}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>Toggle</button>
			</div>
		)
	}
}

*/