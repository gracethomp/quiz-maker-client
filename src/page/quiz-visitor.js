import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Question from '../components/visitor/question';
import NavigationButton from '../components/navigation-buttons';

function QuizVisitor() {
  const { slug } = useParams()
  const [quizes, setQuizes] = useState([]);
  const [formData, setFormData] = useState({
    ip: '',
    result: '100'
  });

  const getData = () => {
    fetch("http://localhost:5000/quizes")
      .then((response) => response.json())
      .then((result) => {
        setQuizes(result);
        setFormData({ ...formData, ip: result.ip });
      })
  };

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
    getData();
  });

  return (
    <div class='creator'>
      {quizes.map((post) => (
        <>
          {post.id === slug &&
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
      <NavigationButton visible={true} handleSubmit={handleSubmit} />
    </div>
  );
};

export default QuizVisitor;