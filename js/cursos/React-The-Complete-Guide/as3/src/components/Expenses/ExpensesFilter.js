import React from 'react';

import './ExpensesFilter.css';

const options = ['', '2022', '2021', '2020', '2019']

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected || ""} onChange={dropdownChangeHandler}>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
