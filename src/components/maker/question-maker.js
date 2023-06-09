import React, { useState } from "react";
import Answer from "./answer-maker";
import trash from "../../assets/trash.png";

function QuestionMaker({
  onDelete,
  question1,
  handleQuestionChange,
  handleAnswers,
  mainIndex,
}) {
  const [answers, setAnswers] = useState([]);

  const maxComponents = 5;

  const addAnswer = () => {
    const updatedAnswers = [
      ...answers,
      { id: generateRandomId(), answer: "", correctness: false },
    ];
    setAnswers(updatedAnswers);
  };

  const deleteComponent = (index) => {
    setAnswers((prevComponents) =>
      prevComponents.filter((component) => component.id !== index)
    );
  };

  const handleAnswerChange = (index, e) => {
    const { value } = e.target;
    const updatedAnswers = answers.map((answer) => {
      if (answer.id === index) {
        return {
          ...answer,
          answer: value,
        };
      }
      return answer;
    });
    setAnswers(updatedAnswers);
    handleAnswers(updatedAnswers, question1.id);
  };

  const handleCorrectnessChange = (index) => {
    const updatedAnswers = answers.map((answer) => {
      if (answer.id === index) {
        return {
          ...answer,
          correctness: true,
        };
      }
      return {
        ...answer,
        correctness: false,
      };
    });
    setAnswers(updatedAnswers);
    handleAnswers(updatedAnswers, question1.id);
  };

  const generateRandomId = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = 10;
    let randomId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  };

  return (
    <div class="round-shadow-box-form form">
      <div class="question">
        <input
          type="text"
          id="question1"
          class="question field"
          value={question1.question}
          placeholder="Enter your question"
          required
          onChange={handleQuestionChange}
        />
        <div class="underline" />
      </div>
      <div class="answers">
        {answers.map((component) => (
          <div key={component.id}>
            <Answer
              answer={component.answer}
              handleAnswerChange={(e) => handleAnswerChange(component.id, e)}
              onDelete={() => deleteComponent(component.id)}
              question={mainIndex}
              checked={component.correctness === true}
              onRadioClick={() => handleCorrectnessChange(component.id)}
            />
          </div>
        ))}
        {answers.length < maxComponents && (
          <button class="button-2" onClick={addAnswer}>
            +
          </button>
        )}
      </div>
      <div class="remove-question">
        <button class="remove-question-button clickable" onClick={onDelete}>
          <img class="trash" src={trash} alt="" />
        </button>
      </div>
    </div>
  );
}

export default QuestionMaker;
