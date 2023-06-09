import React from "react";

const Question = ({ answers, title, handleAnswerChange }) => {
  const handleInputChange = (event) => {
    handleAnswerChange(title, event.target.value);
  };

  return (
    <React.Fragment>
      <div class="round-shadow-box-form form">
        <div class="question">
          <p class>{title}</p>
          <div class="underline"></div>
        </div>
        <div class="answers">
          {answers.map((answer) => (
            <div class="answer">
              <input
                type="radio"
                id={answer.answer}
                name={title}
                value={answer.answer}
                onChange={handleInputChange}
              />
              <label for={answer.answer}></label>
              <p class="answer-text">{answer.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
