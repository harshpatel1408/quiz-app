import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { quizData } from './utils/quizData'

const theme = createTheme({
  palette: {
    primary: { main: '#B92B5D' }, 
    secondary: { main: '#666' },
    background: { default: '#F5F5F5' },
  },
  typography: {
    fontFamily: 'Outfit',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { color: '#333' },
  },
});


function App() {
  const [currentPage, setCurrentPage] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userName, setUserName] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (finalScore, userAnswers) => {
    setScore(finalScore);
    setAnswers(userAnswers);
    setCurrentPage('result');
  };

  const handleExitQuiz = () => {
    setCurrentPage('categories');
    setSelectedCategory(null);
    setAnswers({});
    setScore(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', padding: '20px' }}>
        {currentPage === 'categories' && (
          <CategorySelection
            categories={quizData.categories}
            onSelect={handleCategorySelect}
            userName={userName}
            setUserName={setUserName}
          />
        )}
        {currentPage === 'quiz' && (
          <Quiz
            category={selectedCategory}
            onComplete={handleQuizComplete}
            onExit={handleExitQuiz}
          />
        )}
        {currentPage === 'result' && (
          <Result
            score={score}
            total={selectedCategory.questions.length}
            answers={answers}
            userName={userName}
            onRestart={() => {
              setCurrentPage('categories');
              setSelectedCategory(null);
              setAnswers({});
              setScore(0);
            }}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;