import "./ExpenseItems.css"
 
function ExpenseItems(props){
    const expenseDate = new Date(2023, 8, 17)
    const expenseTitle = 'mushrooms'
    const expenseAmount = 294.67;
    return(
        <Card className = "expense-item">
            <div>{props.expenses.date.toISOString()}</div>
            <div className = "expense-item__description"></div>
            <h2>
                {props.expenses.title}
            </h2>
            <div className = "expense-item__price">${props.expenses.amount}</div>
        </Card>

    )
}
export default ExpenseItems