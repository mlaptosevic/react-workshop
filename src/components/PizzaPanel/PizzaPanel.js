import React from 'react';
import pizzas from '../../data/pizza';
import PizzaCard from '../PizzaCard/PizzaCard';

class PizzaPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pizzas: []
        };
    }

    componentDidMount() {
        this.setState({pizzas});
    }

    render() {
        const pizzaCards = this.state.pizzas.map(pizza => <PizzaCard 
            key={pizza.id} 
            setInfo={() => this.props.setInfo(pizza.description)} 
            name={pizza.name}
            price={pizza.price}
            url={pizza.url}
            />);

        return (
            <div>
                {pizzaCards}
            </div>
        );
    }
}

export default PizzaPanel;