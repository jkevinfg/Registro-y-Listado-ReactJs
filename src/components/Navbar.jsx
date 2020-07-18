import React from 'react'
import "./style/Navbar.css"
import logo from '../img/pngegg.png'


class Navbar  extends React.Component {
    render(){
        return (
            <div className="Navbar">
                 <div className="container-fluid">
                    <a  className="Navbar__brand"  href="/">
                         <img  className="Navbar__brand-logo" src={logo} alt=""/>
                    </a>
                  </div>
               
            </div>
        )
    }
}

export default Navbar
 



