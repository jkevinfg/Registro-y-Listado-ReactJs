import React from 'react'
import "./style/Navbar.css"
import logo from '../img/pngegg.png'
import { Link } from 'react-router-dom'


class Navbar  extends React.Component {
    render(){
        return (
            <div className="Navbar">
                 <div className="container-fluid">
                    <Link  className="Navbar__brand"  to="/">
                         <img  className="Navbar__brand-logo" src={logo} alt=""/>
                    </Link>
                  </div>
               
            </div>
        )
    }
}

export default Navbar
 



