import React from 'react'
import Modal from './Modal'

function DeleteCardModal (props){
    return <Modal  isOpen = {props.isOpen} onClose = {props.onClose}> 
        <div className="DeleteCardModal">
            <h1>Estas seguro  ?</h1>
            <p> Estas por eliminar este card </p>
            <div>
                <button onClick={props.onDeleteCard} className="btn btn-danger mr-4"> Eliminar </button>
                <button onClick={props.onClose}  className="btn btn-primary"> Cancelar </button>
            </div>
        </div>
    </Modal>
}

export default DeleteCardModal

