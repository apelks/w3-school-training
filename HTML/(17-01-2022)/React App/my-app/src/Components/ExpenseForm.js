import React, { useState } from 'react';


import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };



    return(
    <form>
        <div className='new-expense__controls'>

            <div className='new-expense__control'>

                <label>Title</label>

                <input type='text' onChange={titleChangeHandler}></input>
            </div>

            <div className='new-expanse__control'>

                <label>Amount</label>

                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />

            </div>

            <div className='new-expanse__control'>

                <label>Date</label>

                <input type='date' min='2019-01-01' max='2023-01-01' onChange={dateChangeHandler}/>

            </div>

        </div>

        <div className='new-expanse__action'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>

    )

};


export default ExpenseForm;