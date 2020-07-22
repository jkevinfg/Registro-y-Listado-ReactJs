import React from 'react';
import './style/CardsList.css';


class CardsListItem extends React.Component {
  render() {
    return (
      <div className="CardsListItem">
        <img
          className="CardsListItem__avatar"
          src={this.props.card.avatarUrl}
          alt={`${this.props.card.firstName} ${this.props.card.lastName}`}
        />

        <div>
          <strong>
            {this.props.card.firstName} {this.props.card.lastName}
          </strong>
          <br />@{this.props.card.twitter}
          <br />
          {this.props.card.jobTitle}
        </div>
      </div>
    );
  }
}

class CardsList extends React.Component {
    render() {
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