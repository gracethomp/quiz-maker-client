import React, { useState, useEffect }  from 'react';
import Answer from './answer-maker';
import trash from './trash.png';

function QuestionMaker({onDelete, question1, handleQuestionChange, mainIndex, handleAnswers}) {
    const [answers, setAnswers] = useState([]);

    const maxComponents = 5;

    const addAnswer = () => {
        const updatedAnswers = [...answers, { id: generateRandomId(), answer: ''}];
        setAnswers(updatedAnswers);
    };

    const deleteComponent = (index) => {
        setAnswers(prevComponents => prevComponents.filter(component => component.id !== index));
    };

    const handleAnswerChange = (index, e) => {
        const updatedAnswers = answers.map((answer) => {
          if (answer.id === index) {
            return { ...answer, answer: e.target.value };
          }
          return answer;
        });
        setAnswers(updatedAnswers);
        handleAnswers(updatedAnswers, question1.id);
      };

      const generateRandomId = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const length = 10;
        let randomId = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters.charAt(randomIndex);
        }
        return randomId;
      };

    return (
        <div class="form">
            <div class="question">
                <input type="text" id="question1" class="question field" value={question1.question} placeholder="Enter your question" required onChange={handleQuestionChange}/>
                <div class="underline"/>
            </div>
            <div class="answers">
                {answers.map((component) => (
                    <div key={component.id}>
                        <Answer answer={component.answer} handleAnswerChange={(e)=> handleAnswerChange(component.id, e)} onDelete={() => deleteComponent(component.id)} />
                    </div>
                ))}
                {answers.length < maxComponents && (
                    <button class="button-2" role="button" onClick={addAnswer}>+</button>
                )}
            </div>
            <div class="remove-question">
                <button class="remove-question-button" onClick={onDelete}>
                    <img class='trash' src={trash}/>
                </button>
            </div>
        </div>
    );
}

export default QuestionMaker;