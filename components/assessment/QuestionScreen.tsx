
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/data/assessmentQuestions';
import { Progress } from '@/components/ui/progress';

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (value: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  onPreviousQuestion
}) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zyter-blue font-medium">Question {currentIndex + 1} of {totalQuestions}</span>
          <span className="text-sm font-medium">{question.category.charAt(0).toUpperCase() + question.category.slice(1)}</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" indicatorClassName="bg-zyter-gradient" />
        <CardTitle className="mt-6 text-xl md:text-2xl font-semibold text-zyter-navy">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup className="space-y-4" value={selectedAnswer?.toString()} onValueChange={(value) => onSelectAnswer(parseInt(value))}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-start space-x-2 border rounded-md p-4 hover:border-zyter-blue transition-colors">
              <RadioGroupItem value={option.value.toString()} id={`option-${index}`} className="mt-1" />
              <Label htmlFor={`option-${index}`} className="text-base cursor-pointer leading-normal flex-1">{option.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={onPreviousQuestion}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={onNextQuestion}
          disabled={selectedAnswer === null}
          className="bg-zyter-gradient text-white hover:opacity-90 transition-opacity"
        >
          {currentIndex === totalQuestions - 1 ? 'Complete Assessment' : 'Next Question'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionScreen;
