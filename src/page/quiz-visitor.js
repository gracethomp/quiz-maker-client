import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Question from '../components/visitor/question';
import NavigationButton from '../components/navigation-buttons';

function QuizVisitor() {
  const { slug } = useParams()
  const [quizzes, setQuizzes] = useState([]);
  const [formData, setFormData] = useState({
    ip: '',
    result: '100'
  });

  const handleSubmit = () => {
    fetch('http://localhost:5000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/quizzes")
      .then((response) => response.json())
      .then((result) => {
        setQuizzes(result);
        setFormData({ ...formData, ip: result.ip });
      });
  }, [formData]);

  const hasMatchingSlug = quizzes.some((post) => post.slug === slug);

  return (
    <div class='creator'>
      {quizzes.map((post) => (
        <>
          {post.slug === slug &&
            <>
              <div class='round-shadow-box-form form'>
                <p class='title field'>{post.title}</p>
              </div>
              {post.questions.map((question) => (
                <Question title={question.question} answers={question.answers} />
              ))}
            </>
          }
        </>
      ))}
      <NavigationButton visible={hasMatchingSlug} handleSubmit={handleSubmit} />
    </div>
  );
};

export default QuizVisitor;