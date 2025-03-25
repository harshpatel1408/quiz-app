import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Modal,
  Box,
  Link,
} from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 }, 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 4 }, 
  borderRadius: 2,
};

function CategorySelection({ categories, onSelect, userName, setUserName }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleStartQuiz = () => {
    if (userName && selectedCategoryId) {
      const category = categories.find((cat) => cat.id === selectedCategoryId);
      onSelect(category);
    }
  };

  return (
    <Box sx={{ maxWidth: { xs: '100%', sm: '600px' }, mx: 'auto', textAlign: 'center', px: { xs: 2, sm: 0 } }}>
      <Typography variant="h6" color="primary" align="left">
        <span style={{fontWeight: '250'}}>QUIZ</span><span style={{ color: '#B92B5D' }}>Mania</span>
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
        Welcome to <span style={{ color: '#B92B5D' }}><span style={{fontWeight: '250'}}>QUIZ</span>Mania</span>
      </Typography>
      <Typography variant="body1" color="secondary" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        Please read all the rules about this quiz before you start.
        <br /><Link
          component="button"
          variant="body1"
          color="primary"
          onClick={() => setOpenModal(true)}
          sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
        >
          Quiz rules
        </Link>{' '}
      </Typography>
      <TextField
        label="Full name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        fullWidth
        sx={{ mt: 4 }}
        required
      />
      <Typography variant="body1" align="left" sx={{ mt: 4, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        Please select topic to continue
      </Typography>
      <RadioGroup
        value={selectedCategoryId}
        onChange={(e) => setSelectedCategoryId(e.target.value)}
      >
        {categories.map((category) => (
          <FormControlLabel
            key={category.id}
            value={category.id}
            control={<Radio />}
            label={category.name}
            sx={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              m: 1,
              p: 1,
              '& .Mui-checked + .MuiFormControlLabel-label': {
                color: '#B92B5D',
              },
            }}
          />
        ))}
      </RadioGroup>
      <Button
        variant="contained"
        onClick={handleStartQuiz}
        disabled={!userName || !selectedCategoryId}
        sx={{
          mt: 2,
          borderRadius: '10px',
          textTransform: 'uppercase',
          width: { xs: '100%', sm: 'auto' }, 
          py: { xs: 1, sm: 1.5 }, 
        }}
      >
        Start Quiz
      </Button>

      {/* Quiz Rules Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Quiz rules
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <strong>10-Second Timer</strong>
            <ul>
              <li>Each question comes with a 10-second timer.</li>
              <li>
                If you don’t answer within the time limit, the app will
                automatically move to the next question.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <strong>Manual Navigation</strong>
            <ul>
              <li>You can navigate to the next question manually before the timer expires.</li>
              <li>Use the “Next” button to move ahead if you’re ready before the timer runs out.</li>
            </ul>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <strong>Final Score and Performance Message</strong>
            <ul>
              <li>After all questions are answered, your final score will be displayed.</li>
              <li>Based on your performance, you will receive a personalized message:</li>
              <li>Great job!: If you score above 80%.</li>
              <li>Well done!: If you score between 60% and 80%.</li>
              <li>Keep practicing!: If you score below 60%.</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default CategorySelection;