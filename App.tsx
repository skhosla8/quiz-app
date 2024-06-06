// Base Imports 
import React from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";
import { ContextProvider } from './Context';
// Pages
import { QuizHomePage } from './pages/QuizHomePage';
import { QuizQuestionPage } from './pages/QuizQuestionPage';
import QuizScorePage from './pages/QuizScorePage';

export default function App() {
  const data = require('./data.json');
  const questions = data?.quizzes;

  return (
    <ContextProvider>
      <NativeRouter>
        <Routes>
          <Route index path='/' element={<QuizHomePage questions={questions} />} />
          <Route path='/question' element={<QuizQuestionPage />} />
          <Route path='/score' element={<QuizScorePage />} />
        </Routes>
      </NativeRouter>
    </ContextProvider>
  )
};
