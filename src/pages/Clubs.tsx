
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: "CodeCraft",
      description: "A programming club focused on competitive coding, algorithm development, and problem-solving.",
      coordinator: "Prof. Ravi Kumar",
      meetingSchedule: "Every Friday, 4:00 PM - 6:00 PM",
      activities: ["Weekly coding challenges", "Hackathons", "Guest lectures from industry experts"]
    },
    {
      id: 2,
      name: "CyberShield",
      description: "Cybersecurity enthusiast club exploring network security, ethical hacking, and digital forensics.",
      coordinator: "Dr. Priya Sharma",
      meetingSchedule: "Every Tuesday, 3:00 PM - 5:00 PM",
      activities: ["CTF competitions", "Security workshops", "Security audit projects"]
    },
    {
      id: 3,
      name: "WebWizards",
      description: "Web development club focusing on frontend, backend technologies and modern web frameworks.",
      coordinator: "Prof. Anand Verma",
      meetingSchedule: "Every Wednesday, 4:00 PM - 6:00 PM",
      activities: ["Web project collaborations", "UI/UX design sessions", "Web technology workshops"]
    },
    {
      id: 4,
      name: "AI Innovators",
      description: "Exploring artificial intelligence, machine learning, and data science applications.",
      coordinator: "Dr. Sneha Patel",
      meetingSchedule: "Every Thursday, 3:30 PM - 5:30 PM",
      activities: ["AI project development", "Research paper discussions", "ML model implementation workshops"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-department-dark">Department Clubs</h1>
        <p className="text-gray-700 mb-8">
          The IT Department hosts several student-led clubs that provide opportunities for 
          hands-on learning, skill development, and networking. These clubs organize various 
          activities, workshops, competitions, and events throughout the academic year.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {clubs.map(club => (
            <Card key={club.id} className="shadow-md">
              <CardHeader className="bg-department-purple bg-opacity-10">
                <CardTitle className="text-department-blue">{club.name}</CardTitle>
                <CardDescription>{club.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Faculty Coordinator:</p>
                    <p>{club.coordinator}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Meeting Schedule:</p>
                    <p>{club.meetingSchedule}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Activities:</p>
                    <ul className="list-disc pl-5">
                      {club.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;
