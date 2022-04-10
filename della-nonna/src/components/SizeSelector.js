import '../App.css';
import React from 'react';

const sizes = [
    {
        width: 30,
        src: 'pizza.svg',
        price: 20
    },
    {
        width: 40,
        src: 'pizza.svg',
        price: 30
    },
    {
        width: 50,
        src: 'pizza.svg',
        price: 40
    },
];

class SizeSelector extends React.Component {
    updateSizeSelected = (idx) => {
        this.state.sizes.forEach(size => {
            if(this.state.sizes.indexOf(size) === idx) this.setState({idxSelected: idx});
        });
        
    }
    getSizeItems = () => {
        return this.state.sizes.map(size => {
            let className = '';
            if(this.state.idxSelected === this.state.sizes.indexOf(size)) className = 'bordered size-selected';
            return <div className="size-item"><img className={className} src={size.src} alt="pizza" width={size.width} onClick={() => this.updateSizeSelected(this.state.sizes.indexOf(size))}/></div>
        })
    }
    state = {idxSelected: 2, sizes: sizes};
    render() {
        return(
            <div className="size-container">
                {this.getSizeItems()}
            </div>
        );
    }
    
}

export default SizeSelector;