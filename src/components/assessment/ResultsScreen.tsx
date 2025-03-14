
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { categories, Category, Question, Option } from '@/data/assessmentQuestions';
import { Progress } from '@/components/ui/progress';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

interface ResultsScreenProps {
  answers: Record<string, number>;
  questions: Question[];
  onRestart: () => void;
}

interface CategoryScore {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  questions: Array<{
    text: string;
    selectedOption: Option | undefined;
  }>;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ answers, questions, onRestart }) => {
  // Calculate scores for each category
  const categoryScores: CategoryScore[] = categories.map(category => {
    const categoryQuestions = questions.filter(q => q.category === category.id);
    
    const categoryQuestionsWithAnswers = categoryQuestions.map(question => {
      const selectedOptionValue = answers[question.id];
      const selectedOption = question.options.find(opt => opt.value === selectedOptionValue);
      return {
        text: question.text,
        selectedOption
      };
    });
    
    const categoryScore = categoryQuestions.reduce((sum, question) => {
      return sum + (answers[question.id] || 0);
    }, 0);
    
    return {
      id: category.id,
      name: category.name,
      score: categoryScore,
      maxScore: category.maxScore,
      percentage: (categoryScore / category.maxScore) * 100,
      questions: categoryQuestionsWithAnswers
    };
  });
  
  const totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);
  const maxPossibleScore = categoryScores.reduce((sum, cat) => sum + cat.maxScore, 0);
  const overallPercentage = (totalScore / maxPossibleScore) * 100;
  
  // Prepare data for the chart
  const chartData = categoryScores.map(cat => ({
    name: cat.name,
    score: cat.percentage,
    fill: cat.percentage < 50 ? '#ff4d4f' : cat.percentage < 70 ? '#faad14' : '#52c41a'
  }));
  
  // Determine overall readiness level
  let readinessLevel: string;
  let readinessDescription: string;
  
  if (overallPercentage < 40) {
    readinessLevel = "Early Stage";
    readinessDescription = "Your organization is in the early stages of digital health readiness. Significant investment and strategic planning are needed to build a robust digital health infrastructure.";
  } else if (overallPercentage < 60) {
    readinessLevel = "Developing";
    readinessDescription = "Your organization has begun developing its digital health capabilities but has substantial room for improvement in key areas.";
  } else if (overallPercentage < 80) {
    readinessLevel = "Advanced";
    readinessDescription = "Your organization has established advanced digital health capabilities across most areas, with opportunities to further enhance specific components.";
  } else {
    readinessLevel = "Optimized";
    readinessDescription = "Your organization has a highly mature digital health infrastructure and is well-positioned to lead digital health innovations.";
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="shadow-lg border-t-4 border-t-zyter-blue mb-6">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-zyter-navy">Your Digital Health Readiness Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold text-zyter-navy">Overall Readiness Level: <span className="text-zyter-blue">{readinessLevel}</span></h2>
            <div className="relative pt-4">
              <Progress value={overallPercentage} className="h-4 bg-gray-200" indicatorClassName="bg-zyter-gradient" />
              <div className="text-sm font-medium mt-2">{overallPercentage.toFixed(1)}% of 100%</div>
            </div>
            <p className="mt-4 text-gray-700">{readinessDescription}</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-zyter-navy text-center">Readiness by Category</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} unit="%" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Score']} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-zyter-navy text-center">Detailed Assessment</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {categoryScores.map((category, index) => (
                <AccordionItem key={category.id} value={category.id} className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between w-full">
                        <span className="font-semibold text-zyter-navy">{category.name}</span>
                        <span className="text-sm font-medium text-zyter-blue">{category.score} / {category.maxScore} points</span>
                      </div>
                      <Progress 
                        value={category.percentage} 
                        className="h-2 mt-2 bg-gray-200" 
                        indicatorClassName="bg-zyter-gradient"
                      />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <div className="space-y-4 mt-2">
                      {category.questions.map((q, qIndex) => (
                        <div key={qIndex} className="border-b pb-4 last:border-b-0">
                          <p className="font-medium text-gray-800">{q.text}</p>
                          {q.selectedOption && (
                            <div className="mt-2 space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="min-w-4 h-4 rounded-full bg-zyter-blue mt-1"></div>
                                <p className="text-sm">{q.selectedOption.text}</p>
                              </div>
                              {q.selectedOption.feedback && (
                                <p className="text-sm italic ml-6 text-gray-600">{q.selectedOption.feedback}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-zyter-lightblue p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-zyter-navy">Next Steps</h3>
            <p className="mb-4">
              Based on your assessment results, we recommend focusing on the categories with the lowest scores. 
              Zyter can help your government health organization enhance its digital health infrastructure with solutions tailored to your specific needs.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Schedule a consultation with our digital health experts</li>
              <li>Explore our interoperability and telehealth solutions</li>
              <li>Learn about our security and compliance frameworks</li>
              <li>Discover how our cloud infrastructure can enhance your capabilities</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 justify-center items-center pb-8">
          <Button 
            className="bg-zyter-gradient text-white px-8 py-2 rounded-md hover:opacity-90 transition-opacity"
            onClick={() => {
              // In a real implementation, this would open a contact form or redirect to contact page
              alert("In a complete implementation, this would open a contact form or redirect to a contact page.");
            }}
          >
            Request a Consultation
          </Button>
          <Button 
            variant="outline" 
            onClick={onRestart}
          >
            Retake Assessment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultsScreen;
