
import React from 'react';
import Header from '@/components/Header';
import AssessmentContainer from '@/components/assessment/AssessmentContainer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Purple Background */}
      <div className="bg-zyter-purple py-16 md:py-24">
        <div className="zyter-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Health Infrastructure Readiness Assessment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A complete assessment solution to evaluate your government health organization's digital infrastructure and get personalized recommendations.
            </p>
            <Button 
              className="bg-zyter-light-teal text-white hover:bg-zyter-light-teal/90 rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const assessmentElement = document.getElementById('assessment-section');
                if (assessmentElement) {
                  assessmentElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Assessment Section */}
      <main id="assessment-section" className="flex-1 flex flex-col items-center px-4 py-12 bg-white">
        <div className="w-full max-w-6xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zyter-navy mb-4 text-center">
            Evaluate Your Digital Health Readiness
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Evaluate your government health organization's digital infrastructure and get personalized recommendations to enhance your capabilities.
          </p>
        </div>
        <AssessmentContainer />
      </main>
      
      <footer className="py-8 bg-zyter-navy text-white">
        <div className="zyter-container text-center">
          <p className="mb-4">© {new Date().getFullYear()} Zyter. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-zyter-light-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-zyter-light-teal transition-colors">Terms of Service</a>
            <a href="#" className="text-white hover:text-zyter-light-teal transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
