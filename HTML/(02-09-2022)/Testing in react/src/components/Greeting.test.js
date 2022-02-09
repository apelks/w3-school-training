import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello kukan as a text', () => {
    render(<Greeting />);

  
    const helloWorldElement = screen.getByText('Hello kukan');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders who are you', () =>{

    render(<Greeting />);

      
    const outputElement = screen.getByText('are You',{exact: false});
    expect(outputElement).toBeInTheDocument();

  });

  test('renders when button Click', () =>{

    render(<Greeting />);

      
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

  });



});

