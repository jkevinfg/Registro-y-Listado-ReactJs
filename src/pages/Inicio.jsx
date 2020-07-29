import React from 'react'
import './style/Inicio.css'
import Form from '../components/Form'
import Card from '../components/Card'
import api from '../api'


class Inicio extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            specialty: '',
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({
            loading:true, error : null
        })
        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})

        }catch(error){
            this.setState({loading: false , error : error })
        }
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
                             <Form onChange = {this.handleChange}  onSubmit={this.handleSubmit}   formValues = {this.state.form}/>
                         </div>
                         <div className="col-md-6">
                             <Card 
                              twitter= {this.state.form.twitter || 'Twitter'}
                              specialty={this.state.form.specialty || 'Especialidad' }
                              lastName ={this.state.form.lastName || 'Apellidos'}
                              firstName = {this.state.form.firstName || 'Nombre' }
                              email = {this.state.form.email || 'email' }
                              avatar="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                              />
                         </div>
                        
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default Inicio






