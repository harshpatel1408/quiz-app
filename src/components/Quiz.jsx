import React, { useState, useEffect, useCallback } from 'react';
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  LinearProgress,
  Box,
  Link,
} from '@mui/material';

function Quiz({ category, onComplete, onExit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
  const questions = category.questions;

  const handleAnswer = useCallback((answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestion].id]: answer,
    }));
  }, [currentQuestion, questions]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
    } else {
      const score = Object.entries(answers).reduce((acc, [questionId, answer]) => {
        const question = questions.find((q) => q.id === questionId);
        return acc + (answer === question.correctAnswer ? 1 : 0);
      }, 0);
      onComplete(score, answers);
    }
  }, [currentQuestion, questions, answers, onComplete]);

  const handleSkip = useCallback(() => {
    handleNext();
  }, [handleNext]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNext();
    }
  }, [timeLeft, handleNext]); 

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const formattedTime = `0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;
  const selectedAnswer = answers[currentQ.id] || '';

  return (
    <Box sx={{ maxWidth: { xs: '100%', sm: '800px' }, mx: 'auto', px: { xs: 2, sm: 0 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
        <Typography variant="h6" color="primary" align="left">
          <span style={{fontWeight: '250'}}>QUIZ</span><span style={{ color: '#B92B5D' }}>Mania</span>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={onExit}
          sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, py: { xs: 0.5, sm: 1 } }}
        >
          Exit Quiz
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          {currentQuestion + 1}/{questions.length}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          {formattedTime}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          mb: 2,
          backgroundColor: '#ddd',
          '& .MuiLinearProgress-bar': { backgroundColor: '#B92B5D' },
          height: { xs: 6, sm: 8 },
        }}
      />
      <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
        {currentQuestion + 1}. {currentQ.question}
      </Typography>
      <RadioGroup
        value={selectedAnswer}
        onChange={(e) => handleAnswer(e.target.value)}
      >
        {currentQ.options.map((option, index) => {
          const optionValue = option.charAt(0);
          const isSelected = selectedAnswer === optionValue;
          const isCorrect = optionValue === currentQ.correctAnswer;
          let borderColor = '#ddd';
          if (isSelected) {
            borderColor = isCorrect ? 'green' : '#B92B5D';
          }

          return (
            <FormControlLabel
              key={index}
              value={optionValue}
              control={<Radio />}
              label={option}
              sx={{
                border: `1px solid ${borderColor}`,
                borderRadius: '4px',
                m: 1,
                p: 1,
                '& .Mui-checked + .MuiFormControlLabel-label': {
                  color: '#B92B5D',
                },
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            />
          );
        })}
      </RadioGroup>
      <Box sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'space-between', mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            borderRadius: '10px',
            textTransform: 'uppercase',
            width: { xs: '100%', sm: 'auto' },
            mb: { xs: 2, sm: 0 },
            py: { xs: 1, sm: 1.5 },
          }}
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </Button>
        <Link
          component="button"
          variant="body1"
          onClick={handleSkip}
          sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, display: 'block', textAlign: { xs: 'center', sm: 'right' } }}
        >
          Skip this question
        </Link>
      </Box>
    </Box>
  );
}

export default Quiz;