import React, { useState } from 'react';
import "./ExpenseItems.css";

import Card from "../UI/Card";
const  ExpenseItems = (props) => {
    const [title, setTitle] = useState(props.expenses.title);
    // array deconstruction return array(first is the variable, second is the function to update the variable)
    // let title = props.expenses.title;
    const clickHandler = ()=>{
        console.log("click clicked");
        setTitle('Updated!');
    };

    return(
        <Card className = "expense-item">
            <div>{props.expenses.date.toISOString()}</div>
            <div className = "expense-item__description"></div>
            <h2>
                {title}
            </h2>
            <div className = "expense-item__price">${props.expenses.amount}</div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>

    )
};
export default ExpenseItems