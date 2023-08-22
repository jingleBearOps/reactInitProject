import React from 'react'
import ExpenseItem from './ExpenseItems';
import './ExpensesList.css'
const ExpensesList  = props => {
    let expensesContent = <p>No expense found.</p>;
    if (props.items.length === 0){
        return <h2 className = 'expenses-list__fallback'>Found no expenses.</h2>
    };
    return (<ul className = "expenses-list">
     {expensesContent = props.items.map(i =>
        <ExpenseItem key= {i.id} expenses = {i}/>
     )}
    </ul>)
};
export default ExpensesList;
