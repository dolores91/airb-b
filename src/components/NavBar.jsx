import React, { Component } from 'react';
import logo from "../../public/assets/logo.png"
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className='nav'>
                <img src={logo} width="20%"/>
            </div>
        );
    }
}

export default NavBar;
