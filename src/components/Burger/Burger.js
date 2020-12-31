import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)
        .map(igKeys => {
            return [...Array(props.ingredient[igKeys])].map((_, i) => {
                return <BurgerIngredient key={igKeys + i} type={igKeys}></BurgerIngredient>
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients</p>
    }
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {/* <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='meat'></BurgerIngredient> */}
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;