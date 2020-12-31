import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.4,
    meat: 1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {
    state = {
ingredients : {
salad:0,
bacon:0,
cheese:0,
meat:0
},
TotalPrice: 4,
purchaseable:false,
orderClicked:false,
    };
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;

        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;

        const price = INGREDIENT_PRICE[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = price + oldPrice;

        this.setState({TotalPrice:newPrice,ingredients:newIngredients});
this.updateOrderButtonState(newIngredients);
    }
    lessIngredientHanlder = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const  newCount = oldCount -1;

        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;

        const price = INGREDIENT_PRICE[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice - price;
this.setState({TotalPrice: newPrice,ingredients:newIngredients});
this.updateOrderButtonState(newIngredients);
    }
    updateOrderButtonState = (newIngredients)=> {

        const sum = Object.keys(newIngredients).map(igKey=>{
            return newIngredients[igKey];
        }).reduce((sum,ele)=>{
            return sum+ele;
        },0)
        this.setState({purchaseable:sum>0});
    }
    showHideModal=()=>{
        this.setState({orderClicked:true});
    }
    purchaseCancelHandler = () =>{
        this.setState({orderClicked:false});
    }
    purchaseContinueHandler = () =>{
        alert('You Continue');
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.orderClicked} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.state.TotalPrice.toFixed(2)}/>
                </Modal>
                <Burger ingredient={this.state.ingredients}></Burger>
                <BuildControls addHandler={this.addIngredientHandler}
                 lessHandler={this.lessIngredientHanlder}
                 disabled={disableInfo}
                 price={this.state.TotalPrice}
                 disabledOrder={this.state.purchaseable}
                 ordered={this.showHideModal}></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;