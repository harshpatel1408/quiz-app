import React from 'react';
import { Typography, Button, Box, Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function Result({ score, total, answers, userName, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const unanswered = total - Object.keys(answers).length;
  const incorrect = total - score - unanswered;
  let performanceText;
  if (percentage > 80) performanceText = 'Great job!';
  else if (percentage >= 60) performanceText = 'Well done!';
  else performanceText = 'Keep practicing!';

  const isHighScore = percentage > 60;

  return (
    <Box sx={{ maxWidth: { xs: '100%', sm: '600px' }, mx: 'auto', textAlign: 'center', px: { xs: 2, sm: 0 }, py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
        <Typography variant="h6" color="primary" align="left">
          <span style={{fontWeight: '250'}}>QUIZ</span><span style={{ color: '#B92B5D' }}>Mania</span>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#333', mr: 1, width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}>
            {userName.charAt(0)}
          </Avatar>
          <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, color: '#333' }}>
            {userName}
          </Typography>
        </Box>
      </Box>

      {/* Icon */}
      {isHighScore ? (
        <CheckCircleOutlineIcon sx={{ fontSize: { xs: 50, sm: 60 }, color: 'green' }} />
      ) : (
        <SentimentDissatisfiedIcon sx={{ fontSize: { xs: 50, sm: 60 }, color: '#D81B60' }} />
      )}

      {/* Subtext */}
      <Typography
        variant="body1"
        color="secondary"
        sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}
      >
        {isHighScore
          ? 'You successfully completed the Quiz and holds'
          : 'You successfully completed the Quiz but you need to'}
      </Typography>

      {/* Main Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 1, fontSize: { xs: '1.5rem', sm: '2.125rem' } }}
      >
        {isHighScore ? 'CONGRATULATION' : 'KEEP PRACTICING!'}
      </Typography>

      {/* Score Section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, color: '#666' }}
        >
          Your Score
        </Typography>
        {isHighScore ? (
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem' },
              color: 'green',
              fontWeight: 'bold',
            }}
          >
            {percentage}%
          </Typography>
        ) : (
          <Box
            sx={{
              border: '2px solid #D81B60',
              borderRadius: '50%',
              width: { xs: 100, sm: 120 },
              height: { xs: 100, sm: 120 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mx: 'auto',
              mt: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                color: '#FFC107', // Mustard yellow color
                fontWeight: 'bold',
              }}
            >
              {percentage}%
            </Typography>
          </Box>
        )}
        <Typography
          variant="body1"
          sx={{ mt: 1, fontSize: { xs: '1rem', sm: '1.25rem' }, color: '#333' }}
        >
          {performanceText}
        </Typography>
      </Box>

      {/* Summary Section */}
      <Box
        sx={{
          mt: 2,
          bgcolor: '#F5F5F5',
          borderRadius: '8px',
          p: 2,
          border: '1px solid #ddd',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, color: '#666' }}
        >
          Out of {total} question
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}
        >
          <span style={{ color: 'green' }}>{score} Correct</span>{' '}
          <span style={{ color: '#D81B60' }}>{incorrect} Incorrect</span>{' '}
          <span style={{ color: '#666' }}>{unanswered} Not answered</span>
        </Typography>
      </Box>

      {/* Retake Quiz Button */}
      <Button
        variant="outlined"
        color="primary"
        onClick={onRestart}
        sx={{
          mt: 4,
          borderRadius: '10px',
          textTransform: 'uppercase',
          width: { xs: '100%', sm: 'auto' },
          py: { xs: 1, sm: 1.5 },
        }}
      >
        Retake Quiz
      </Button>
    </Box>
  );
}

export default Result;