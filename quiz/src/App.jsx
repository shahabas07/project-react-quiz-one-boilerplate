import React from 'react';
import './App.css';
import HomeComponent from './Components/Home'
import ResultComponent from './Components/result';
import QuizComponent from './Components/quiz';
function App() {
  return (
    <div className="App">
      <HomeComponent/>
       <QuizComponent/> 
      <ResultComponent/>
    </div>
  );
}
export default App;