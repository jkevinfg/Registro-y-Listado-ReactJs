import React from 'react'
import './style/Inicio.css'
import Form from '../components/Form'
import Card from '../components/Card'
import PageLoading from '../components/PageLoading'
import api from '../api'

class Edit extends React.Component {
    state = {
        loading : true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            specialty: '',
            twitter: ''
        }   
    }

    componentDidMount(){
        this.fetchData()
    }
    
    fetchData = async e => {
        this.setState({ loading : true , error : null})
        try{
            const data = await api.badges.read(
                this.props.match.params.id 
            )
            this.setState({loading: false, form : data })
        }catch(error) {
            this.setState({ loading : false , error : error})
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
            await api.badges.update(this.props.match.params.id ,this.state.form)
            this.setState({loading: false})
            this.props.history.push('/lista')
        }catch(error){
            this.setState({loading: false , error : error })
        }
    }

   
    
    render(){
        if(this.state.loading ){
            return <PageLoading />
        }


        return (
            <React.Fragment>
                 <div className="Form__hero">
                    <img className="img-fluid" src="" alt=""/>
                 </div>

                 <div className="container">
                     <div className="row">
                     <div className="col-md-6">
                     <h1> Editar asistente</h1>

                             <Form onChange = {this.handleChange}  
                                   onSubmit={this.handleSubmit}   
                                   formValues = {this.state.form}
                                   error = {this.state.error}
                                   />
                         </div>
                         <div className="col-md-6">
                             <Card 
                              twitter= {this.state.form.twitter || 'Twitter'}
                              specialty={this.state.form.specialty || 'Especialidad' }
                              lastName ={this.state.form.lastName || 'Apellidos'}
                              firstName = {this.state.form.firstName || 'Nombre' }
                              email = {this.state.form.email || 'email' }
                              />
                         </div>
                        
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default Edit






