import React from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";


const NewExpense = (props) => {
    const saveExpenseDataHandler = (eneterdExpenseData) => {
        const expenseData = {
            ...eneterdExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData)
    };
    return(
        <div className = 'new-expense'>
            <ExpenseFrom onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
};
export default NewExpense;