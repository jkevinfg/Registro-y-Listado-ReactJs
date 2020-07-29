import React from 'react';
import {Link} from 'react-router-dom'

import './style/CardsList.css';
import Gravatar from './Gravatar'

class CardsListItem extends React.Component {
  render() {
    return (
      <div className="CardsListItem">
        <Gravatar className="CardsListItem__avatar"  email={this.props.card.email} />
        <div>
          <strong>
            {this.props.card.firstName} {this.props.card.lastName}
          </strong>
          <br />@{this.props.card.twitter}
          <br />
          {this.props.card.specialty}
        </div>
      </div>
    );
  }
}

class CardsList extends React.Component {
    render() {
      if(this.props.cards.length === 0){
          return(
            <div>
              <h3>No encontramos ningun asistente</h3>
              <Link className="btn btn-primary"  to="/" >
                Crear un nuevo registro
              </Link>
            </div>
          )
      }      
      return (
        <div className="CardsList">
          <ul className="list-unstyled">
            {this.props.cards.map(card => {
              return (
                <li key={card.id}>
                  <CardsListItem card={card} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  
  export default CardsList;