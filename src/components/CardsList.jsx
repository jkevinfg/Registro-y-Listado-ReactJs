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

function useSearchCards(cards){
  const [query, setQuery] = React.useState('')
  const [filteredCards,setFilteredCards] = React.useState(cards)

  React.useMemo( ()=>{
     const result = cards.filter(card => {
      return `${card.firstName} ${card.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredCards(result)
  }, [cards , query])

  return {query, setQuery, filteredCards }
}



function CardsList(props)  {
      const cards = props.cards

      const { query,  setQuery , filteredCards} = useSearchCards(cards)


      if(filteredCards.length === 0){
          return(
            <div>
                  <div className="form-group">
              <label>Buscador</label>
              <input type="text" className="form-control" 
                value = {query}
                onChange = { e => {
                  setQuery(e.target.value)
                }}
              />
          </div>
              <h3>No encontramos ningun asistente</h3>
              <Link className="btn btn-primary"  to="/" >
                Crear un nuevo registro
              </Link>
            </div>
          )
      }      
      return (
        <div className="CardsList">
          <div className="form-group">
              <label>Buscador</label>
              <input type="text" className="form-control" 
                value = {query}
                onChange = { e => {
                  setQuery(e.target.value)
                }}
              />
          </div>

          <ul className="list-unstyled">
            {filteredCards.map(card => {
              return (
                <li key={card.id}>
                  <Link  className="text-reset text-decoration-none" to = {`/${card.id}`}>
                      <CardsListItem card={card} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    
  }
  
  export default CardsList; 