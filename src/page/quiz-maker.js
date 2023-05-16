import React, { userState } from 'react';
import QuestionMaker from '../components/question-maker';
import plus from './plus.png'

function QuizMaker() {
    return (
        <div>
            <QuestionMaker/>
            <img src={plus}/>
        </div>
    );
}

export default QuizMaker;