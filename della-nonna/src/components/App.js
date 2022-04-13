import React from 'react';
import '../App.css';
import Counter from './Counter';
import SizeSelector from './SizeSelector';
import whin from '../apis/whin';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counterElement = React.createRef();
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

  sendMessage = () => {
    const options = {
      method: 'POST',
      url: 'https://whin2.p.rapidapi.com/whin',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'whin2.p.rapidapi.com',
        'X-RapidAPI-Key': '5657c824demsh682a18bcc1d4d17p10ffbdjsn702fcbaeca5e'
      },
      data: '{"phone":"51988299711","token":"7e5b0da4d49374d25e27c1270f5134d800bb0b3c","text":"Usted ha sido hackeada, a menos que compra una cuatro quesos!!!!!"}'
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
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
          <h3>{pizza.name} x {pizza.quantity}</h3>
          <h3>{pizza.priceSelected * pizza.quantity}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" data-id={pizza.id} className='delete-item-icon' viewBox="0 0 16 16" onClick={e => {console.log(e.target.dataset.id);this.updateCounterSelected(e.target.dataset.id * 1, 0)}}>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </>
      )
    })
  }

  getPizzaCards = () => {
    return this.state.pizzas.map(card => {
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
            <h3>Total</h3>
            <h3 onClick={() => this.sendMessage()}>S/ {this.state.pizzas.reduce((ac, pizza) => ac + pizza.quantity * pizza.priceSelected, 0)}</h3>
          </div>
        </div>
        <div className="item-list-container">
          {this.getPizzaCards()}
        </div>
      </div>
    );
  }
  
}

export default App;
