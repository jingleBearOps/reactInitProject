import React, { useState } from 'react';

import ExpenseItems from "./components/expense/ExpenseItems";
import Card from "./components/UI/Card"
import NewExpense from "./components/newExpense/NewExpense";
import "./components/expense/ExpenseItems.css";
import ExpensesFilter from './components/expense/ExpenseFilter';

const DUMMY_EXPENSES = [
  {title: "Golden Teacher", amount: "42" ,date:new Date(2023, 8, 3), id: 'e1'},
  {title: "B +", amount: "29" ,date:new Date(2023, 7, 23), id: 'e2'},
  {title: "Unknown Fungi", amount: "33" ,date:new Date(2023, 5, 3), id: 'e3'}
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
  const [filteredYear, setFilteredYear] = useState('2023');
  const [filterInfoText, setFilterInfoText] = useState('2019, 2020, 2021 & 2022')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilterInfoText('2020, 2021, 2022 & 2023')
    } else if (selectedYear === '2020') {
      setFilterInfoText('2019, 2021, 2022 & 2023')
    } else if (selectedYear === '2021'){
      setFilterInfoText('2019, 2020, 2022 & 2023')
    } else if (selectedYear === '2022'){
      setFilterInfoText('2019, 2020 , 2021 , 2023')
    } else {
      setFilterInfoText('2019, 2020, 2021, 2022')
    }
  }
  const filteredExpenses  = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
        <p>Data for year {filterInfoText} is hidden.</p>
        {filteredExpenses.map(i => <ExpenseItems key= {i.id} expenses = {i}/>)}
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
