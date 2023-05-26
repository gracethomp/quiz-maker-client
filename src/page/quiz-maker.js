import React, { useState } from 'react';
import QuestionMaker from '../components/maker/question-maker';
import NavigationButton from '../components/navigation-buttons';
import plus from './plus.png'

function QuizMaker() {
    const [mainIndex, setIndex] = useState(0);
    const [questions, setQuestions] = useState([ ]);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        questions: []
      });

    const addQuestion = () => {
        const updatedQuestions = [...questions, { id: mainIndex + 1, question: '', answers: [] }];
        setQuestions(updatedQuestions);
        setIndex(mainIndex + 1);
        setFormData((prevFormData) => ({
            ...prevFormData,
            questions: updatedQuestions
          }));
    };

    const deleteQuestion = (index) => {
        setQuestions(components => components.filter(component => component.id !== index))
    }

    const handleQuizTitle = (e) => {
        const { value } = e.target;
            let id = value.toLowerCase();
            id = id.replace(/\s/g, "-");
            setFormData({ ...formData, 'title': value, id: id });
    };

    const handleSubmit = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
        setFormData({ ...formData, questions: [...questions, newQuestion] });
        fetch('http://localhost:5000/quizes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
    }

    const handleAddQuestions= ()=> {
        const questions = [...formData.questions, { id: mainIndex, name: '', category: '' }];
        setFormData({ ...formData, questions });
        setIndex(mainIndex + 1);
    };
    
    const handleQuestionsChange = (index, e) => {
        const updatedQuestions = questions.map((question) => {
            if (question.id === index) {
              return { ...question, question: e.target.value };
            }
            return question;
          });
        
          setQuestions(updatedQuestions);
          setFormData((prevFormData) => ({
            ...prevFormData,
            questions: updatedQuestions,
          }));
    };

    const handleRemoveQuestions = (index) => {
        const questions = formData.questions.filter(e => e.id !== index);
        setFormData({ ...formData, questions });
    };

    return (
        <>
        <div class='creator'>
            <div class='form'>
                <input type="text" class="title field" value={formData.title} placeholder="Quiz title" required onChange={handleQuizTitle}/>
            </div>
            {questions.map(question => (
                <div key={question.id}>
                    {/* <div class="question">
                        <input type="text" id="question1" class="question field" value={question.question} placeholder="Enter your question" required onChange={(e) => handleQuestionsChange(question.id, e)}/>
                        <div class="underline"/>
                    </div> */}
                    <QuestionMaker question1={question.question} onDelete={() => deleteQuestion(question.id)} handleQuestionChange={(e)=> handleQuestionsChange(question.id, e)} />
                </div>
            ))}
            <div class='plus-question'>
                <button onClick={addQuestion} class='button-plus-question'>
                    <img class='plus-img' src={plus}/>
                </button>
            </div>
            <NavigationButton visible={questions.length >= 1 && formData.title !== ''} handleSubmit={handleSubmit}/>
        </div>
        </>
    );
}

export default QuizMaker;