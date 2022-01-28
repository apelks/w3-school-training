import React, { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {

  const {
    value : enteredName,
    hasError : nameInputHasError,
    valueChangeHandler : nameInputChangedHandler,
    inputBlurHandler : nameBlurHandler,
    isValid : enteredNameIsValid,
    reset : resetNameInput
  } = useInput(value => value.trim() !== '');

  
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();


    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    
    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control"
    : "form-control  invalid";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control"
    : "form-control  invalid";

  return (
    <>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name Must Not Be Empty!</p>
          )}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Please Enter a valid email</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default SimpleInput;
