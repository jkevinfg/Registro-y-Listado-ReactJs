import React from 'react'
import './style/Inicio.css'
import Form from '../components/Form'
import Card from '../components/Card'

class Inicio extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            specialty: 'software developers',
            twitter: ''
        }
}


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    
    render(){
        return (
            <React.Fragment>
                 <div className="Form__hero">
                    <img className="img-fluid" src="" alt=""/>
                 </div>

                 <div className="container">
                     <div className="row">
                     <div className="col-md-6">
                             <Form onChange = {this.handleChange} formValues = {this.state.form}/>
                         </div>
                         <div className="col-md-6">
                             <Card avatar="https://s.gravatar.com/avatar/b07373a89159201f5c1e652dc3a2903b?s=80"
                              twitter= {this.state.form.twitter}
                              specialty={this.state.form.specialty}
                              lastName ={this.state.form.lastName}
                              firstName = {this.state.form.firstName}
                              email = {this.state.form.email}
                              />
                         </div>
                        
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default Inicio






