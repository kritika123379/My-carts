import React,{useState} from "react";
import Card from "../UI/Card";




const IngredientForm  = React.memo(props =>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');

    const submitHandler =  (event)  => {
        event.preventDefault();
        props.addIngredientHandler({title:{enteredTitle},amount:{enteredAmount}})
    }

    return(
        <section className="ingredient-form">
        <Card>
        <div className="form-control">
        <label htmlFor="title">Name</label>
        <input 
        value={enteredTitle}
        onChange={event=>{setEnteredTitle(event.target.value)}}
        type="text" id="title"/>
        </div>
        <div className="form-control">
        <label htmlFor="amount">amount</label>
        <input 
        value={enteredAmount}
        onChange={event=>{setEnteredAmount(event.target.value)}}
        type="number" id="amount"/>
        </div>
        <div className="ingredients-form_action">
        <button type="submit" onSubmit={submitHandler}>Add ingredients</button>
        </div>
        </Card>
        </section>
    )
})

export default IngredientForm