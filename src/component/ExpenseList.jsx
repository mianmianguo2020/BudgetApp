import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

export const ExpenseList = () => {
	const { expenses } = useContext(AppContext); 

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul className='list-group mt-3 mb-3'>
                {filteredExpenses.map((expense,id)=>{
                return <ExpenseItem key={id} id={expense.id} name={expense.name} cost={expense.cost}/>
                })}
			</ul>
		</>
	);
};