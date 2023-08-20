import ExpenseItems from "./components/expense/ExpenseItems";
import Card from "./components/UI/Card"
import NewExpense from "./components/newExpense/NewExpense";
function App() {
  const expenses = [
    {title: "Golden Teacher", amount: "42" ,date:new Date(2023, 8, 3)},
    {title: "B +", amount: "29" ,date:new Date(2023, 7, 23)},
    {title: "Unknown Fungi", amount: "33" ,date:new Date(2023, 5, 3)}
  ]
  return (
    <div>
      <NewExpense/>
      <Card className="expenses">
        <ExpenseItems
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
        </ExpenseItems>
      </Card>

    </div> 
  );
}

export default App;
