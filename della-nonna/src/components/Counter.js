import '../App.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cont:0};
  }

  updateCounter = (value) => {
    this.setState(
      {cont: this.state.cont + value < 0 ? 0 : this.state.cont + value},
      () => this.props.updateCounterSelected(this.props.id, this.state.cont)
    );
    
  }

  render() {
    return (
      <div className="counter-container">
        <button className='btn-icon' onClick={() => this.updateCounter(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
        </button>
        <div>{this.state.cont}</div>
        <button className='btn-icon' onClick={() => this.updateCounter(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
    );
  }
    
};

export default Counter;