import React from 'react'
import './style/Details.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Card from '../components/Card'
import {Link} from 'react-router-dom'

import api from '../api'


class Details extends React.Component {

    state = {
        loading : true,
        error : null ,
        data : undefined
    }

    componentDidMount(){
        this.fetchData ()
    }
    fetchData = async () => {
        this.setState ({loading : true, error : null })
        try {
            const data = await api.badges.read(this.props.match.params.id)
            this.setState({loading : false, data :data})
        } catch ( error ){
            this.setState({ loading : false , error : error })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error = {this.state.error}/>
        }

        const card = this.state.data


        return (
            <div>
                <div className="CardDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            </div>
                            <div className="col-6   CardDetails__hero-attendant-name ">
                                 <h1>
                                    {card.firstName} {card.lastName}
                                 </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Card 
                                firstName = {card.firstName}
                                lastName = {card.lastName}
                                email = {card.email}
                                twitter = {card.twitter}
                                specialty = {card.specialty}
                            />
                        </div>
                        <div className="col-6">
                            <h2>Actions</h2>
                            <div>
                                <div> <Link  className="btn btn-primary mb-4"  to = {`/${card.id}/edit`}> Editar  </Link>   </div>
                                <div> <button className ="btn btn-danger"> Delete </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details