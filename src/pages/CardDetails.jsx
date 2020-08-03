import React from 'react'
import Card from '../components/Card'
import DeleteCardModal from '../components/DeleteCardModal'
import {Link} from 'react-router-dom'
import './style/Details.css'

function useIncreaseCount(max){
    const [count, setCount] = React.useState(0)
    if(count > max) {
        setCount(0)
    }
    return [count,setCount]
}
function CardDetails (props) {
    const [count, setCount] = useIncreaseCount(4)
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
                                <div> 
                                    <button  onClick={() => {
                                        setCount(count + 1)
                                    }} className="btn btn-primary mr-4">
                                        Contador : {count}
                                    </button>
                                    <Link  className="btn btn-primary mb-4"  to = {`/${card.id}/edit`}> Editar  </Link>   </div>
                                <div> 
                                    <button  onClick={props.onOpenModal}  className ="btn btn-danger"> Delete </button>
                                    <DeleteCardModal  
                                        onClose={props.onCloseModal} 
                                        isOpen= {props.modalIsOpen}
                                        onDeleteCard = {props.onDeleteCard}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}


export default CardDetails