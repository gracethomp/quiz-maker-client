import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Question from './components/visitor/question';

test('renders MyComponent without errors', () => {
  render(<App />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('answer test', () => {
  const props = {
    question: '???',
    answers: [{
      'id': 1,
      'answer': 'answer1'
    }, {
      'id': 2,
      'answer': 'answer2'
    }],
  };
  render(<Question {...props} />);
});

test('handles button click correctly', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText('Go');
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeVisible;
});