import '../App.css';
import React from 'react';

class SizeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idxSelected: 2, 
            sizes: [
                {
                    width: 30, 
                    src: 'pizza.svg',
                },
                {
                    width: 40,
                    src: 'pizza.svg',
                },
                {
                    width: 50,
                    src: 'pizza.svg', 
                },
            ]
        };
    }
    componentDidMount() {
        const sizes = [...this.state.sizes];
        for(let i = 0; i < sizes.length; i++) {
            sizes[i].price = this.props.prices[i];
        }
        this.setState({sizes: sizes}, () => console.log(this.state.sizes));
        
    }
    updateSizeSelected = (idx) => {
        this.state.sizes.forEach(size => {
            if(this.state.sizes.indexOf(size) === idx) this.setState({idxSelected: idx}, this.props.updatePriceSelected(this.props.id, size.price));
        });
        
    }
    getSizeItems = () => {
        return this.state.sizes.map(size => {
            let className = '';
            if(this.state.idxSelected === this.state.sizes.indexOf(size)) className = 'bordered size-selected';
            return <div className="size-item"><img className={className} src={size.src} alt="pizza" width={size.width} onClick={() => this.updateSizeSelected(this.state.sizes.indexOf(size))}/></div>
        })
    }
    
    render() {
        return(
            <div className="size-container">
                {this.getSizeItems()}
            </div>
        );
    }
    
}

export default SizeSelector;