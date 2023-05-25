import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizMaker from './page/quiz-maker';
import QuizVisitor from './page/quiz-visitor';
import QuizAccess from './page/quiz-access';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maker" element={<QuizMaker />}/>
        <Route path="/quiz-slug" element={<QuizVisitor/>}/>
        <Route path='/' element={<QuizAccess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
