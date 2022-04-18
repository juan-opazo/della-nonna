import React from 'react';
import '../App.css';
import Counter from './Counter';
import SizeSelector from './SizeSelector';
import whin from '../apis/whin';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Order from './Order';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.counterElement = React.createRef();
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

  
  renderContent() {
    return(
      <>
      <header>
          <div class="ui fixed menu" style={{'border-radius': 0}} >
            <div class="header item">
              <img src="pizza.svg" class="ui centered mini image" alt='pizza'/>
            </div>
            {/* <a class="item">
              About Us
            </a> */}
            <div class="right menu">
              <div class="item">
                <img src="phone.svg" class="ui centered mini image" style={{'width':'20px'}} alt='phone'/> (043) 313234
              </div>
            </div>
          </div>
        </header>
        <main>
          <Order/>
        </main>
        <footer>
          <div class="ui  vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable grid">
                {/* <div class="three wide column">
                  <h4 class="ui header">Community</h4>
                  <div class="ui link list">
                    <a class="item" href="https://www.transifex.com/organization/semantic-org/">Help Translate</a>
                    <a class="item" href="https://github.com/Semantic-Org/Semantic-UI/issues">Submit an Issue</a>
                    <a class="item" href="https://gitter.im/Semantic-Org/Semantic-UI">Join our Chat</a>
                    <a class="item" href="/cla.html">CLA</a>
                  </div>
                </div> */}
                <div class="three wide column">
                  <h4 class="ui header">Redes Sociales</h4>
                  <div class="ui link list">
                    <a class="item" href="https://facebook.com">Facebook</a>
                    <a class="item" href="http://youtube.com">Instagram</a>
                  </div>
                </div>
                <div class="seven wide right floated column">
                  <h4 class="ui header">Formas de Pago</h4>
                  <img src="visa.svg" alt="" width="80"/>
                  <img src="master.svg" alt="" width="80"/>
                </div>
              </div>
              <div class="ui section divider"></div>
              <img src="pizza.svg" class="ui centered mini image" alt='pizza'/>
              <div class="ui horizontal small divided link list">
                <div class="item" >© 2020 Todos los derechos reservados</div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  renderLogin() {
    return(
      <div className='login-container'>
        <div className='login-content'>
          <h1>Iniciar Sesion</h1>
          <form class="ui form">
            <div class="field">
              <label>Email</label>
              <input type="email" name="email"/>
            </div>
            <div class="field">
              <label>Contrasena</label>
              <input type="password" name="password"/>
            </div>
            <div class="field">
            </div>
            <button class="ui button primary basic" type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    );
  }
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={this.renderContent}/>
        <Route path='/login' exact component={this.renderLogin}/>
        
      </BrowserRouter>
    );
  }
  
}

export default App;
