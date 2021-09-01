import React, { useCallback, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filterDate, setFilterDate] = useState("");
  const filteredItems = filterDate
    ? items.filter(({ date }) => date.getFullYear() === (filterDate | 0))
    : items;
  const onChangeFilter = useCallback((date) => {
    setFilterDate(date);
  }, []);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterDate} onChangeFilter={onChangeFilter} />
      {filteredItems.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};

export default Expenses;
