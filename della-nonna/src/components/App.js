import React from 'react';
import '../App.css';
import Counter from './Counter';
import SizeSelector from './SizeSelector';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        {
          id: 0,
          name: 'Napolitana',
          prices: [10, 15, 20],
          priceSelected: 20,
          quantity: 0,
          img: 'napolitana.jpg'
        },
        {
          id: 1,
          name: 'Vegetariana',
          prices: [14, 19, 24],
          priceSelected: 24,
          quantity: 0,
          img: 'vegetariana.jpg'
        },
        {
          id: 2,
          name: 'Cuatro quesos',
          prices: [12, 17, 22],
          priceSelected: 22,
          quantity: 0,
          img: 'cuatro_quesos.jpg'
        },
        {
          id: 3,
          name: 'Carnivora',
          prices: [20, 25, 30],
          priceSelected: 30,
          quantity: 0,
          img: 'carnivora.jpg'
        }
      ]
    }
  }
  updateCounterSelected = (id, count) => {
    const pizzas = [...this.state.pizzas];
    pizzas.forEach(pizza => {
      if(pizza.id === id) {
        pizza.quantity = count;
      }
    });
    this.setState({pizzas: pizzas});
    console.log(this.state.pizzas.reduce((ac, pizza) => ac + pizza.quantity * pizza.priceSelected, 0));
  }
  updatePriceSelected = (key, priceSelected) => {
    const pizzas = [...this.state.pizzas];
    pizzas.forEach(pizza => {
      if(pizza.id === key) {
        pizza.priceSelected = priceSelected;
      }
    });
    this.setState({pizzas: pizzas});
  }

  getSummary = () => {
    const pizzasSelected = this.state.pizzas.filter(pizza => pizza.quantity > 0);
    return pizzasSelected.map(pizza => {
      return(
        <>
          <h2>{pizza.name} x {pizza.quantity}</h2>
          <h3>{pizza.priceSelected * pizza.quantity}</h3>
        </>
      )
    })
  }

  getPizzaCards = cards => {
    return cards.map(card => {
      return(
        <div className="item-card-container bordered">
          <img src={card.img} alt="img" className="image"/>
          <h4>{card.name}</h4>
          <h5>S/ {card.priceSelected}</h5>
          <SizeSelector key={card.name} id={card.id} prices={card.prices} updatePriceSelected={this.updatePriceSelected}/>
          <Counter key={card.id} id={card.id} updateCounterSelected={this.updateCounterSelected}/>
        </div>
      )
    });
  }
  render() {
    return (
      <div>
        <div className="summary-container">
          <h2>Pizzas Seleccionadas:</h2>
          <div class="ui section divider set-divider-width"></div>
          <div className="summary-items-container">
            {this.getSummary()}
          </div>
          <div class="ui section divider set-divider-width"></div>
          <div className="summary-items-container">
            <h2>Total</h2>
            <h3>S/ {this.state.pizzas.reduce((ac, pizza) => ac + pizza.quantity * pizza.priceSelected, 0)}</h3>
          </div>
        </div>
        <div className="item-list-container">
          {this.getPizzaCards(this.state.pizzas)}
        </div>
      </div>
    );
  }
  
}

export default App;
