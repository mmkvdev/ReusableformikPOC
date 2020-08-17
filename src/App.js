import React from 'react';
import './App.css';
// import FormikContainer from './components/FormikContainer';
// import RegistrationForm from './components/RegistrationForm';
// import CourseEnrollmentForm from './components/CourseEnrollmentForm';
import { theme, ThemeProvider } from '@chakra-ui/core';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <ThemeProvider theme={theme} className="themeContainer">
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
