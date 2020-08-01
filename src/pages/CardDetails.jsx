import React from 'react'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import './style/Details.css'



function CardDetails (props) {
    const card = props.card
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


export default CardDetails