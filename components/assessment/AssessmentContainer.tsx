
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';
import { questions } from '@/data/assessmentQuestions';

const AssessmentContainer: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'questions' | 'results'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  
  const handleStartAssessment = () => {
    setStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };
  
  const handleSelectAnswer = (value: number) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: value
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('results');
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleRestartAssessment = () => {
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {step === 'welcome' && (
        <WelcomeScreen onStart={handleStartAssessment} />
      )}
      
      {step === 'questions' && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={answers[questions[currentQuestionIndex].id] !== undefined ? answers[questions[currentQuestionIndex].id] : null}
          onSelectAnswer={handleSelectAnswer}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
        />
      )}
      
      {step === 'results' && (
        <ResultsScreen
          answers={answers}
          questions={questions}
          onRestart={handleRestartAssessment}
        />
      )}
    </div>
  );
};

export default AssessmentContainer;
