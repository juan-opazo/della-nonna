import '../App.css';
import Counter from './Counter';
import SizeSelector from './SizeSelector';

const pizzas = [
  {
    name: 'napolitana',
    precio: 10,
    img: 'napolitana.jpg'
  },
  {
    name: 'vegetariana',
    precio: 10,
    img: 'napolitana.jpg'
  },
  {
    name: 'cuatro quesos',
    precio: 10,
    img: 'napolitana.jpg'
  },
  {
    name: 'carnivora',
    precio: 10,
    img: 'napolitana.jpg'
  }
];

const getPizzaCards = cards => {
  return cards.map(card => {
    return(
      <div className="item-card-container bordered">
        <img src={card.img} alt="img" className="image"/>
        <h4>{card.name}</h4>
        <SizeSelector/>
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
