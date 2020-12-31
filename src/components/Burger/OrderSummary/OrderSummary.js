import React, { Component } from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    //this could be a functional component,doesn't have to be a class
    componentWillUpdate(){
        console.log("[OrderSummary] willUpdate");
    }
    render() {
        const summary = this.props.ingredients;
        const list = Object.keys(summary).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {summary[igKey]}
                </li>);
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following Ingredients: </p>
                <ul>
                    {list}
                </ul>
                <p>Continue to Checkout?</p>
                <p>Total Price: <strong>{this.props.totalPrice}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
