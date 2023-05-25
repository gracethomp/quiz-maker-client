import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function QuizAccess() 
{
    const navigate = useNavigate();

    const navigateToMaker = () => {
      // Redirect to another page
      navigate('/maker');
    };

    const navigateToQuiz = () => {
        // Redirect to another page
        navigate('/quiz-slug');
    };

    return (
        <div class='form access'>
            <div class='header'>
                <p class='header-text'>quizmaker.com</p>
            </div>
            <div class='access-form'>
                <input class='field quiz-slag' type='text' placeholder='Put quiz-slug here'/>
                <div class='creation-buttons'>
                    <div role='button' class='access-button form' onClick={navigateToQuiz}>
                        <span class='send-text'>Go</span>
                    </div>
                </div>
            </div>
            <div class='underline'/>
                <div class='creation-buttons'>
                    <div role='button' class='create-quiz-button form' onClick={navigateToMaker}>
                        <span class='send-text'>Create your own quiz</span>
                    </div>
                </div>
        </div>
    )
}

export default QuizAccess;