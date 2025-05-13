
import React from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';

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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Department Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-department-dark">About Department</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
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
              <p className="text-gray-700">
                The department has well-equipped laboratories with modern facilities and is staffed 
                with highly qualified and experienced faculty who are dedicated to ensuring academic 
                excellence and professional growth of students.
              </p>
            </div>
          </section>

          {/* Department Events Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-department-dark">Department Events</h2>
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
      </div>
    </Layout>
  );
};

export default Index;
