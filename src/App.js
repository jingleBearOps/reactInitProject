import React, { useState } from 'react';

import ExpenseItems from "./components/expense/ExpenseItems";
import Card from "./components/UI/Card"
import NewExpense from "./components/newExpense/NewExpense";
import "./components/expense/ExpenseItems.css";
import ExpensesFilter from './components/expense/ExpenseFilter';
import { waitForDomChange } from '@testing-library/react';
const DUMMY_EXPENSES = [
  {title: "Golden Teacher", amount: "42" ,date:new Date(2023, 8, 3)},
  {title: "B +", amount: "29" ,date:new Date(2023, 7, 23)},
  {title: "Unknown Fungi", amount: "33" ,date:new Date(2023, 5, 3)}
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(
      (prevExpenses) => {
        console.log(expenses)
        return [...prevExpenses, expense];
    });
  };
  // const addExpenseHandler = expense => {
  //   console.log("IN App.js");
  //   console.log(expense);
  // };
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilterInfoText('2020, 2021 & 2022')
    } else if (selectedYear === '2020') {
      setFilterInfoText('2019, 2021 & 2022')
    } else if (selectedYear === '2021'){
      setFilterInfoText('2019, 2020 & 2022')
    } else {
      setFilterInfoText('2019, 2020 & 2021')
    }
  }

  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
        <p>Data for year {filterInfoText} is hidden.</p>
        {expenses.map(i => <ExpenseItems expenses = {i}/>)}
        {/* <ExpenseItems 
          expenses = {expenses[0]}
        >
        </ExpenseItems>
        <ExpenseItems
          expenses = {expenses[1]}
        >
        </ExpenseItems>
        <ExpenseItems
          expenses = {expenses[2]}
        >
        </ExpenseItems> */}

      </Card>

    </div> 
  );
}

export default App;
