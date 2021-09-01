import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => (
  <div className="expenses">
    {expenses &&
      expenses.length &&
      expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
  </div>
);

export default Expenses;
