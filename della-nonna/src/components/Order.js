import React from 'react';
import Counter from './Counter';
import SizeSelector from './SizeSelector';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas: [
              {
                id: 0,
                name: 'Napolitana',
                description: 'Una perfecta mezcla de pepperoni americano, carne de res, carne de cerdo, Jamón, salchicha italiana, champiñones, pimientos verdes, cebolla roja, aceitunas verdes y queso mozzarella.',
                prices: [10, 15, 20],
                priceSelected: 20,
                quantity: 0,
                img: 'napolitana.jpg'
              },
              {
                id: 1,
                name: 'Vegetariana',
                description: 'Exquisita combinación de champiñones, aceitunas verdes, pimientos verdes, cebolla roja y queso mozzarella.',
                prices: [14, 19, 24],
                priceSelected: 24,
                quantity: 0,
                img: 'vegetariana.jpg'
              },
              {
                id: 2,
                name: 'Cuatro quesos',
                description: 'Para los amantes del queso una deliciosa pizza con nuestro queso mozzarella gratinado.',
                prices: [12, 17, 22],
                priceSelected: 22,
                quantity: 0,
                img: 'cuatro_quesos.jpg'
              },
              {
                id: 3,
                name: 'Carnivora',
                description: '¡Un festín de carnes! Pepperoni americano, salchicha italiana, carne de res, carne decerdo, rebanadas de Jamón y queso mozzarella.',
                prices: [20, 25, 30],
                priceSelected: 30,
                quantity: 0,
                img: 'carnivora.jpg'
              }
            ]
          };
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
                <div className='item-card-content'>
                    <div className='item-card-content-inner'>
                        <div className='item-card-content-front'>
                            <img src={card.img} alt="img" className="image"/>
                        </div>
                        <div className='item-card-content-back'>
                            {card.description}
                        </div>
                    </div>
                    
                </div>
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
            <>
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
            </>
        );
    }
}

export default Order;