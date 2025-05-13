import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-16 md:py-24 transform-gpu will-change-auto">
        <div className="container mx-auto px-4 transform-gpu will-change-auto">
          <div className="flex flex-col md:flex-row items-center transform-gpu will-change-auto">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 animate-fade-in transform-gpu will-change-auto">
              <div className="flex items-center mb-6">
                <img src="/vait-logo.png" alt="VAIT Department Logo" className="h-16 w-16 mr-4 rounded-full shadow-md" />
                <h1 className="text-4xl md:text-5xl font-bold text-department-dark leading-tight transform-gpu will-change-auto">
                  Department of <span className="text-department-purple transform-gpu will-change-auto">Information Technology</span>
                </h1>
              </div>
              <p className="text-gray-700 text-lg mb-8 transform-gpu will-change-auto">
                Shaping the future through innovation, quality education, and technological excellence. Join us in our journey to create tomorrow's IT leaders.
              </p>
            </div>
            <div className="md:w-1/2 animate-fade-in transform-gpu will-change-auto" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="IT Department" 
                className="rounded-lg shadow-2xl w-full h-auto transform-gpu will-change-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 transform-gpu will-change-auto">
        {/* About Department Section */}
        <section className="animate-fade-in transform-gpu will-change-auto" style={{ animationDelay: '0.3s' }}>
          <h2 className="section-header transform-gpu will-change-auto">About Department</h2>
          <div className="prose max-w-none transform-gpu will-change-auto">
            <p className="text-gray-700 mb-4 text-lg transform-gpu will-change-auto">
              Department of Information Technology established in the year 2019 with an intake of 60. 
              The mission of the Department is to provide quality and value-laden education for 
              students, in the traditional and contemporary areas of Information Technology.
            </p>
            <p className="text-gray-700 mb-4 transform-gpu will-change-auto">
              Our department offers comprehensive courses in programming, database management, 
              networking, cybersecurity, web technologies, and artificial intelligence. We prepare 
              our students to excel in the rapidly evolving field of IT through a blend of 
              theoretical knowledge and practical applications.
            </p>
            <p className="text-gray-700 mb-6 transform-gpu will-change-auto">
              The department has well-equipped laboratories with modern facilities and is staffed 
              with highly qualified and experienced faculty who are dedicated to ensuring academic 
              excellence and professional growth of students.
            </p>
            <Button variant="outline" className="flex items-center gap-2 group transform-gpu will-change-auto">
              Learn More 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
        
        {/* Quick Stats Section */}
        <section className="mt-16 py-12 bg-gradient-to-r from-department-purple/5 to-department-blue/5 rounded-xl transform-gpu will-change-auto">
          <div className="container mx-auto px-4 transform-gpu will-change-auto">
            <h2 className="section-header-center mb-12 transform-gpu will-change-auto">Department Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-gpu will-change-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-purple mb-2 transform-gpu will-change-auto">98%</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Placement Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-blue mb-2 transform-gpu will-change-auto">15+</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Research Projects</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-purple mb-2 transform-gpu will-change-auto">20+</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Industry Partners</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect transform-gpu will-change-auto">
                <div className="text-4xl font-bold text-department-blue mb-2 transform-gpu will-change-auto">4</div>
                <div className="text-gray-700 transform-gpu will-change-auto">Active Student Clubs</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
