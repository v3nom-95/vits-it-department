
import React from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Application-based ChatGPT",
      description: "Learn how to build applications using ChatGPT and OpenAI technologies in this hands-on workshop.",
      date: "March 27 & 28, 2024",
      time: "8:45 AM - 3:30 PM",
      location: "B-602",
      imageSrc: "/event-chatgpt.png"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "A two-day workshop on modern web development techniques and frameworks.",
      date: "April 15 & 16, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "IT Lab 1",
      imageSrc: "/event-webdev.png"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-department-dark leading-tight">
                Department of <span className="text-department-purple">Information Technology</span>
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Shaping the future through innovation, quality education, and technological excellence. Join us in our journey to create tomorrow's IT leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-department-purple hover:bg-department-purple/90">
                  Explore Programs
                </Button>
                <Button variant="outline" className="border-department-blue text-department-blue hover:bg-department-blue hover:text-white">
                  Student Resources
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="IT Department" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Department Section */}
          <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="section-header">About Department</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 text-lg">
                Department of Information Technology established in the year 2019 with an intake of 60. 
                The mission of the Department is to provide quality and value-laden education for 
                students, in the traditional and contemporary areas of Information Technology.
              </p>
              <p className="text-gray-700 mb-4">
                Our department offers comprehensive courses in programming, database management, 
                networking, cybersecurity, web technologies, and artificial intelligence. We prepare 
                our students to excel in the rapidly evolving field of IT through a blend of 
                theoretical knowledge and practical applications.
              </p>
              <p className="text-gray-700 mb-6">
                The department has well-equipped laboratories with modern facilities and is staffed 
                with highly qualified and experienced faculty who are dedicated to ensuring academic 
                excellence and professional growth of students.
              </p>
              <Button variant="outline" className="flex items-center gap-2 group">
                Learn More 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </section>

          {/* Department Events Section */}
          <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-header">Department Events</h2>
            <div className="space-y-6">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  imageSrc={event.imageSrc}
                />
              ))}
            </div>
          </section>
        </div>
        
        {/* Quick Stats Section */}
        <section className="mt-16 py-12 bg-gradient-to-r from-department-purple/5 to-department-blue/5 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="section-header-center mb-12">Department Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
                <div className="text-4xl font-bold text-department-purple mb-2">98%</div>
                <div className="text-gray-700">Placement Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
                <div className="text-4xl font-bold text-department-blue mb-2">15+</div>
                <div className="text-gray-700">Research Projects</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
                <div className="text-4xl font-bold text-department-purple mb-2">20+</div>
                <div className="text-gray-700">Industry Partners</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
                <div className="text-4xl font-bold text-department-blue mb-2">4</div>
                <div className="text-gray-700">Active Student Clubs</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
