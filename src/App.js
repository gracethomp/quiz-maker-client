import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizMaker from './page/quiz-maker';
import QuizVisitor from './page/quiz-visitor';
import QuizAccess from './page/quiz-access';
import Result from "./page/results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maker" element={<QuizMaker />}/>
        <Route path="/:slug" element={<QuizVisitor slug1='random-general-quiz'/>}/>
        <Route path='/' element={<QuizAccess/>}/>
        <Route path='/results' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}
// render={({ match }) => <QuizVisitor slug={match.params.slug}
export default App;
