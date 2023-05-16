import React, { useState } from 'react';
import QuestionMaker from '../components/question-maker';
import plus from './plus.png'

function QuizMaker() {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ id: 1 }]);

    const addQuestion = () => {
        const index = questions.length;
        setQuestions([...questions, { id: questions.length + 1 }]);
    };

    const deleteQuestion = (index) => {
        setQuestions(components => components.filter(component => component.id !== index))
    }

    return (
        <div class='creator'>
            <div class='form'>
                <input type="text" class="title field" value={title} placeholder="Quiz title" required/>
            </div>
            {questions.map(question => (
                <div key={question.id}>
                    <QuestionMaker onDelete={() => deleteQuestion(question.id)} />
                </div>
            ))}
            <div class='plus-question'>
                <button onClick={addQuestion} class='button-plus-question'>
                    <img class='plus-img' src={plus}/>
                </button>
            </div>
        </div>
    );
}

export default QuizMaker;