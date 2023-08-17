import ExpenseItems from "./components/ExpenseItems";
import Card from "./components/Card"

function App() {
  const expenses = [
    {title: "type A", amount: "42.4" ,date:new Date(2023, 8, 3)},
    {title: "type B", amount: "29.3" ,date:new Date(2023, 7, 23)},
    {title: "type C", amount: "33.2" ,date:new Date(2023, 5, 3)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
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
