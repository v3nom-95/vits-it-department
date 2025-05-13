
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Award } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: "CodeCraft",
      description: "A programming club focused on competitive coding, algorithm development, and problem-solving.",
      coordinator: "Prof. Ravi Kumar",
      meetingSchedule: "Every Friday, 4:00 PM - 6:00 PM",
      activities: ["Weekly coding challenges", "Hackathons", "Guest lectures from industry experts"],
      color: "purple",
      members: 45,
      established: "2020"
    },
    {
      id: 2,
      name: "CyberShield",
      description: "Cybersecurity enthusiast club exploring network security, ethical hacking, and digital forensics.",
      coordinator: "Dr. Priya Sharma",
      meetingSchedule: "Every Tuesday, 3:00 PM - 5:00 PM",
      activities: ["CTF competitions", "Security workshops", "Security audit projects"],
      color: "blue",
      members: 32,
      established: "2021"
    },
    {
      id: 3,
      name: "WebWizards",
      description: "Web development club focusing on frontend, backend technologies and modern web frameworks.",
      coordinator: "Prof. Anand Verma",
      meetingSchedule: "Every Wednesday, 4:00 PM - 6:00 PM",
      activities: ["Web project collaborations", "UI/UX design sessions", "Web technology workshops"],
      color: "purple",
      members: 38,
      established: "2019"
    },
    {
      id: 4,
      name: "AI Innovators",
      description: "Exploring artificial intelligence, machine learning, and data science applications.",
      coordinator: "Dr. Sneha Patel",
      meetingSchedule: "Every Thursday, 3:30 PM - 5:30 PM",
      activities: ["AI project development", "Research paper discussions", "ML model implementation workshops"],
      color: "blue",
      members: 40,
      established: "2020"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Department Clubs</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Join our student-led clubs to enhance your skills, network with peers, and participate in exciting tech events.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 max-w-4xl">
          The IT Department hosts several student-led clubs that provide opportunities for 
          hands-on learning, skill development, and networking. These clubs organize various 
          activities, workshops, competitions, and events throughout the academic year.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club) => (
            <Card key={club.id} className={`overflow-hidden shadow-lg border-t-4 ${club.color === 'purple' ? 'border-department-purple' : 'border-department-blue'} card-hover-effect`}>
              <CardHeader className={`bg-gradient-to-r ${club.color === 'purple' ? 'from-department-purple/5 to-department-purple/10' : 'from-department-blue/5 to-department-blue/10'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className={`text-2xl ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'}`}>{club.name}</CardTitle>
                    <CardDescription className="mt-2 text-base">{club.description}</CardDescription>
                  </div>
                  <Badge variant={club.color === 'purple' ? 'default' : 'secondary'} className={`${club.color === 'purple' ? 'bg-department-purple' : 'bg-department-blue'}`}>
                    Est. {club.established}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Users className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                    <div>
                      <p className="font-semibold">Club Details</p>
                      <p>Faculty Coordinator: {club.coordinator}</p>
                      <p>Active Members: {club.members}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                    <div>
                      <p className="font-semibold">Meeting Schedule</p>
                      <p>{club.meetingSchedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                    <div>
                      <p className="font-semibold">Activities</p>
                      <ul className="list-disc pl-5">
                        {club.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>
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
