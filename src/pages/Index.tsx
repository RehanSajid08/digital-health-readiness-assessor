
import React from 'react';
import Header from '@/components/Header';
import AssessmentContainer from '@/components/assessment/AssessmentContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-6xl mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-zyter-navy mb-4">
            Digital Health Infrastructure Readiness Assessment
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Evaluate your government health organization's digital infrastructure and get personalized recommendations to enhance your capabilities.
          </p>
        </div>
        <AssessmentContainer />
      </main>
      <footer className="py-6 border-t bg-white">
        <div className="container text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zyter. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
