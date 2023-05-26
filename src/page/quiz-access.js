import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizAccess() {
    const navigate = useNavigate();
    const [slug, setSlug] = useState('');

    const navigateToMaker = () => {
        navigate('/maker');
    };

    const navigateToQuiz = () => {
        navigate('/'.concat(slug))
    };

    const handleSlugEntering = (event) => {
        setSlug(event.target.value);
    };

    return (
        <div class='round-shadow-box-form access'>
            <div class='header'>
                <p class='header-text'>quizmaker.com</p>
            </div>
            <div class='access-form'>
                <input class='field quiz-slag' value={slug} type='text' placeholder='Put quiz-slug here' onChange={handleSlugEntering} />
                <div class='creation-buttons'>
                    <div role='button' class='access-button clickable round-shadow-box-form' onClick={navigateToQuiz}>
                        <span class='send-text'>Go</span>
                    </div>
                </div>
            </div>
            <div class='underline' />
            <div class='creation-buttons'>
                <div role='button' class='create-quiz-button clickable round-shadow-box-form' onClick={navigateToMaker}>
                    <span class='send-text'>Create your own quiz</span>
                </div>
            </div>
        </div>
    )
}

export default QuizAccess;