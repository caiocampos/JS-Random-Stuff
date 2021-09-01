import React, { useCallback, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({items}) => {
  const [filteredYear, setFilteredYear] = useState('');
  const filteredItems = filteredYear
    ? items.filter(({ date }) => date.getFullYear() === (filteredYear | 0))
    : items;
  const onChangeFilter = useCallback((date) => {
    setFilteredYear(date);
  }, []);
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onChangeFilter}
        />
        {filteredItems.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
