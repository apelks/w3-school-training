import React, { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {

  const {
    value : enteredName,
    hasError : nameInputHasError,
    valueChangeHandler : nameInputChangedHandler,
    inputBlurHandler : nameBlurHandler
  } = useInput(value => value.trim() !== '');

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
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
