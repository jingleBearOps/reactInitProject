import "./ExpenseItems.css"
function ExpenseItems(){
    return(
        <div className = "expense-item">
            <div>Aug 17th 2023</div>
            <div className = "expense-item__description"></div>
            <h2>
                Expense Items
            </h2>
            <div className = "expense-item__price">$69.73</div>
        </div>

    )
}
export default ExpenseItems