import React from 'react'
import "./style/Card.css"


class Card extends React.Component {

    
    render(){
        return(
            <div className="card">
                <div className="card_header">
                    <img src="" alt="Logo de la conferencia"/>
                </div>
                <div className="card_section-name">
                    <img className="card_avatar" src="" alt="Avatar"/>
                    <h1>{this.props.firstName}
                        <br/> {this.props.lastName}
                    </h1>
                </div>
                <div className="card_section-info">
                    <h3>Software developer</h3>
                    <div>@jkevinfg</div>
                </div>
                <div className="card_footer">Conferencia Developer UNI</div>
            </div>
        )
    }
}


export default Card;