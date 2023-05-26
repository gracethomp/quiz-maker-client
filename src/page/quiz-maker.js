import React, { useState } from 'react';
import QuestionMaker from '../components/maker/question-maker';
import NavigationButton from '../components/navigation-buttons';
import plus from './plus.png'

function QuizMaker() {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        // questions: []
      });
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ id: 1 }]);

    const addQuestion = () => {
        const index = questions.length;
        setQuestions([...questions, { id: questions.length + 1 }]);
    };

    const deleteQuestion = (index) => {
        setQuestions(components => components.filter(component => component.id !== index))
    }

    const handleQuizTitle = (e) => {
        const { value } = e.target;
            let id = value.toLowerCase(); // Convert the name to lowercase for the id field
            id = id.replace(/\s/g, "-");
            setFormData({ ...formData, 'title': value, id: id });
            //setFormData({ ...formData, 'title': e.target.value });
    };

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/quizes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
        // Handle the response from the API
        console.log(data);
      })
    }

    return (
        <>
        <div class='creator'>
            <div class='form'>
                <input type="text" class="title field" value={formData.title} placeholder="Quiz title" required onChange={handleQuizTitle}/>
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
            <NavigationButton visible={questions.length >= 1 && formData.title != ''} handleSubmit={handleSubmit}/>
        </div>
        </>
    );
}

export default QuizMaker;