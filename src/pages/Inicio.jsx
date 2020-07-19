import React from 'react'
import './style/Inicio.css'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Card from '../components/Card'

class Inicio extends React.Component {
    render(){
        return (
            <h1>
                <Navbar/>
                 <div className="Form__hero">
                    <img className="img-fluid" src="" alt=""/>
                 </div>

                 <div className="container">
                     <div className="row">
                     <div className="col-md-6">
                             <Form/>
                         </div>
                         <div className="col-md-6">
                             <Card avatar="https://s.gravatar.com/avatar/b07373a89159201f5c1e652dc3a2903b?s=80" twitter="jkevinfg" specialty="System Engineers"lastName ="Flores"firstName = "Kevin"/>
                         </div>
                        
                     </div>
                 </div>
            </h1>
        )
    }
}

export default Inicio






