import React from 'react';

import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

    //const [title, setTitle] = useState(props.title);

    return (

        <li>
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>


        </div>
        </li>
    );
}

export default ExpenseItem;