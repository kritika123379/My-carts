import React,{useState} from 'react'
import Search from './Search'
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
const  Ingredients = () =>  {
    const[userIngredients,setUserIngredients]=useState([]);

    const addIngredientHandler = ingredients =>{
        console.log(ingredients)
        fetch('https://socialapp-31093.firebaseio.com/ingredients.json',{
            method:'Post',
            body:JSON.stringify(ingredients),
            headers:{'Content-type':'application/json'}
        })
        .then(response=>{
            console.log(response)
            return response.json();

        }).then(responsedata=>{
            setUserIngredients(previngredient =>[
                ...previngredient,
                {id:responsedata.name,
                ...ingredients}
            ])
        })
       
    }
    const removeIngredientHandler = ingredientId => {
        setUserIngredients(previngredient=>previngredient.filter(ingredient=>ingredient.id !== ingredientId ))
    }
    return (
        <div className="App">
           <IngredientForm
           addIngredientHandler={addIngredientHandler}/>
           <section>
           <IngredientList ingredients={userIngredients}
           onRemoveItem={removeIngredientHandler}
            />
           <Search/>
           </section> 
        </div>
    )
}

export default Ingredients
