import React, { useState }  from 'react';
import Answer from './answer-maker';
import trash from './trash.png';

function QuestionMaker({onDelete, question1, handleQuestionChange}) {
    const [answers, setAnswers] = useState([{ id: 1 }]);

    const maxComponents = 5;

    const addAnswer = () => {
        const index = answers.length;
        setAnswers([...answers, { id: answers.length + 1 }]);
    };

    const deleteComponent = (index) => {
        setAnswers(prevComponents => prevComponents.filter(component => component.id !== index));
    };

    return (
        <div class="form">
            <div class="question">
                <input type="text" id="question1" class="question field" value={question1} placeholder="Enter your question" required onChange={handleQuestionChange}/>
                <div class="underline"/>
            </div>
            <div class="answers">
                {answers.map((component) => (
                    <div key={component.id}>
                        <Answer onDelete={() => deleteComponent(component.id)} />
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