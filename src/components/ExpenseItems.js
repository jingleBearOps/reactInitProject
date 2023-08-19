import React, { useState } from 'react';
import "./ExpenseItems.css"

import Card from "./Card";
function ExpenseItems(props){
    let title = props.expenses.title
    const clickHandler = ()=>{
        console.log("click clicked")
        title = "Updated!"
    }
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
}
export default ExpenseItems