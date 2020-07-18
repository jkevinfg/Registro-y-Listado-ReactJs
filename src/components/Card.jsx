import React from 'react'
import "./style/Card.css"


class Card extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card__header">
                    <img src="" alt=""/>
                </div>
                <div className="card__section-name">
                    <img className="card__avatar" src={this.props.avatar} alt="Avatar"/>
                    <h1>{this.props.firstName}
                        <br/> {this.props.lastName}
                    </h1>
                </div>
                <div className="card__section-info">
                    <h3>{this.props.specialty}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="card__footer">#Conferencia</div>
            </div>
        )
    }
}


export default Card;