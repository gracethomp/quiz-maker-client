import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizMaker from './page/quiz-maker';
import QuizVisitor from './page/quiz-visitor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizMaker />}/>
        <Route path="/quiz-slug" element={<QuizVisitor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
