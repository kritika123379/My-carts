import React from 'react';

const IngredientList = (props) => {
    return (
        <section className="ingredient-list">
            <h2>LOaded Ingredients</h2>
            <ul>
            {props.ingredients.map(ig=>{
              return(  <li key={ig.id} onClick={props.onRemoveItem.bind(this,ig.id)}>
                <span>{ig.title}</span>
                <span>{ig.amount}</span>
                </li>)
            })

            }
            </ul>
        </section>
    );
};

export default IngredientList;