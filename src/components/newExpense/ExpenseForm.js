import React, {useSate, useState} from "react"; 
import ExpenseForm from './ExpenseForm'
const ExpenseFrom = (props) => {
    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdAmount: '',
    //     enterdDate: ''
    // });
    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value,
        // });
    };
    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value,
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        // console.log(expenseDate);
        props.onSaveExpenseData(expenseDate);
        setEnterdTitle("");
        setEnterdAmount("");
        setEnterdTitle("");
    };
    return(
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" value = {enterdTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" value = {enterdAmount} min= '0.01' step = '0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = "date" value = {enterdDate} min= '2019-01-01' step = '2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = 'submit'> ADD EXPENSE</button>
            </div>
        </form>
    )
};  
export default ExpenseFrom; 