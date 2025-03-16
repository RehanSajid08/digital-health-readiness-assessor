
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-t-4 border-t-zyter-blue">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold text-zyter-navy">Digital Health Infrastructure Readiness Assessment</CardTitle>
        <CardDescription className="text-lg">
          Evaluate your government health organization's digital infrastructure
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-zyter-lightblue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-zyter-navy">Why Take This Assessment?</h3>
          <ul className="space-y-3 list-disc pl-5">
            <li>Identify gaps in your current digital health infrastructure</li>
            <li>Benchmark your organization against industry standards</li>
            <li>Receive personalized recommendations for improvement</li>
            <li>Develop a roadmap for digital health transformation</li>
            <li>Understand how to better integrate systems for improved healthcare delivery</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zyter-navy">This assessment evaluates five key areas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-medium text-zyter-blue">Data Interoperability</h4>
              <p className="text-sm mt-1">How well your systems exchange and use shared information</p>
            </div>
            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-medium text-zyter-blue">Security Standards</h4>
              <p className="text-sm mt-1">Protection measures for your health information systems and data</p>
            </div>
            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-medium text-zyter-blue">Telehealth Integration</h4>
              <p className="text-sm mt-1">Capability to deliver health services via telecommunication technologies</p>
            </div>
            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-medium text-zyter-blue">Digital Infrastructure</h4>
              <p className="text-sm mt-1">The underlying technical resources supporting digital health operations</p>
            </div>
            <div className="p-4 border rounded-md bg-white md:col-span-2">
              <h4 className="font-medium text-zyter-blue">Data Governance</h4>
              <p className="text-sm mt-1">Policies and processes for ensuring effective data management</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-zyter-navy">What to Expect</h3>
          <p>This assessment contains 15 questions and takes approximately 5-10 minutes to complete. Upon completion, you'll receive a detailed report with scores and recommendations tailored to your organization.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Button 
          onClick={onStart}
          className="bg-zyter-gradient text-white px-8 py-6 text-lg rounded-md hover:opacity-90 transition-opacity"
        >
          Assess Your Government Health Organization's Digital Health Readiness!
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WelcomeScreen;
