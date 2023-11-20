import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import Practice from './components/Practice';
import Spanish from './components/Spanish';
import French from './components/French';
import German from './components/German';
//import Logout from './components/Logout';
import FrenchLesson from './components/FrenchLesson';
import FrenchLesson2 from './components/FrenchLesson2';
import FrenchLesson3 from './components/FrenchLesson3';
import FrenchLesson4 from './components/FrenchLesson4';
import Frenchvideo1 from './components/Frenchvideo1';
import FrenchVideo2 from './components/FrenchVideo2';
import Frenchvideo3 from './components/Frenchvideo3';
import Frenchvideo4 from './components/Frenchvideo4';
import Frenchvideo5 from './components/Frenchvideo5';
import FrenchLesson5 from './components/FrenchLesson5';
import FrenchLesson6 from './components/FrenchLesson6'
import Quiz from './components/Quiz';
import Practice2 from './components/Practice2';
import Practice3 from './components/Practice3';
// import Script from './components/Script';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import EditQuiz from './components/EditQuiz';
import Admin from './components/Admin';
import AttendQuiz from './components/AttendQuiz';
import UserQuizList from './components/UserQuizList';

function App() {
return (
<div >
  
  <BrowserRouter>
 
  <Routes>
   <Route path="/" element={<Signup />} />
   <Route path="/register" element={<Signup />} />
   <Route path="/login" element={<Login />} />
   <Route path="/home" element={<Home />} />
   <Route path="/lessons" element={<Lessons />} />
   <Route path="/quizzes" element={<Quizzes />} />
   <Route path="/practice" element={<Practice />} />
   <Route path="/french" element={<French />} />
   <Route path="/spanish" element={<Spanish />} />
   <Route path="/german" element={<German />} />
   {/* <Route path="/logout" element={<Logout />} /> */}
   <Route path="/frenchLesson"  element={<FrenchLesson />} /> 
   <Route path="/frenchLesson2"  element={<FrenchLesson2 />} /> 
   <Route path="/frenchLesson3"  element={<FrenchLesson3 />} /> 
   <Route path="/frenchLesson4"  element={<FrenchLesson4 />} /> 
   <Route path="/frenchLesson5"  element={<FrenchLesson5 />} /> 
   <Route path="/frenchLesson6" element={<FrenchLesson6 />} />
   <Route path="/fvideo1"  element={<Frenchvideo1 />} /> 
   <Route path="/fvideo2"  element={<FrenchVideo2 />} /> 
   <Route path="/fvideo3"  element={<Frenchvideo3 />} /> 
   <Route path="/fvideo4"  element={<Frenchvideo4 />} /> 
   <Route path="/fvideo5"  element={<Frenchvideo5 />} /> 
   <Route path="/quiz" element={<Quiz />} />
   <Route path="/practice2" element={<Practice2 />} />
   <Route path="/practice3" element={<Practice3 />} />
   <Route path="/create-quiz" element={<CreateQuiz />} />
   <Route path="/quiz-list" element={<QuizList/>} />
   <Route path="/edit-quiz/:id" element={<EditQuiz/>} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/attend-quiz" element={<AttendQuiz />} />
  <Route path="/userquiz-list" element={<UserQuizList />} />

</Routes>
</BrowserRouter>
</div>
);
}
export default App;

