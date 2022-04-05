import '../App.css';
import Counter from './Counter';

const pizzas = [
  {
    name: 'napolitana',
    precio: 10
  },
  {
    name: 'vegetariana',
    precio: 10
  },
  {
    name: 'cuatro quesos',
    precio: 10
  },
  {
    name: 'carnivora',
    precio: 10
  }
];

const getPizzaCards = cards => {
  return cards.map(card => {
    return(
      <div className="item-card-container">
        <img src="logo192.png" alt="im 1" className="image"/>
        <h4>Napolitana</h4>
        <Counter/>
      </div>
    )
  });
}

const App = () => {
  return (
    <div className="item-list-container">
      {getPizzaCards(pizzas)}
    </div>
  );
}

export default App;
