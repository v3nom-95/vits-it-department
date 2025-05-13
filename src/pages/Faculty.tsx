
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Arun Sharma",
      position: "Head of Department",
      qualification: "Ph.D. in Computer Science",
      experience: "15+ years of teaching and research experience",
      specialization: "Artificial Intelligence, Machine Learning",
      email: "arun.sharma@vits.ac.in",
      image: "/faculty1.png"
    },
    {
      id: 2,
      name: "Prof. Meena Gupta",
      position: "Associate Professor",
      qualification: "M.Tech in Information Technology",
      experience: "12 years of teaching experience",
      specialization: "Database Management Systems, Data Mining",
      email: "meena.gupta@vits.ac.in",
      image: "/faculty2.png"
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      position: "Assistant Professor",
      qualification: "Ph.D. in Computer Engineering",
      experience: "8 years of teaching and 4 years of industry experience",
      specialization: "Computer Networks, Cloud Computing",
      email: "rajesh.kumar@vits.ac.in",
      image: "/faculty3.png"
    },
    {
      id: 4,
      name: "Prof. Sanjay Verma",
      position: "Assistant Professor",
      qualification: "M.Tech in Computer Science",
      experience: "9 years of teaching experience",
      specialization: "Web Technologies, Software Engineering",
      email: "sanjay.verma@vits.ac.in",
      image: "/faculty4.png"
    },
    {
      id: 5,
      name: "Dr. Priya Singh",
      position: "Assistant Professor",
      qualification: "Ph.D. in Information Security",
      experience: "7 years of teaching and research experience",
      specialization: "Cybersecurity, Cryptography",
      email: "priya.singh@vits.ac.in",
      image: "/faculty5.png"
    },
    {
      id: 6,
      name: "Prof. Amit Kumar",
      position: "Assistant Professor",
      qualification: "M.Tech in Software Engineering",
      experience: "6 years of teaching and 3 years of industry experience",
      specialization: "Mobile Application Development, IoT",
      email: "amit.kumar@vits.ac.in",
      image: "/faculty6.png"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-department-dark">Faculty Members</h1>
        <p className="text-gray-700 mb-8">
          Our department has highly qualified and experienced faculty members dedicated to providing 
          quality education and mentoring to students. They bring a wealth of knowledge from both 
          academia and industry.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map(faculty => (
            <Card key={faculty.id} className="overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="bg-department-blue bg-opacity-10 p-4 flex items-center gap-4 border-b">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-department-purple text-white text-xl">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                    <p className="text-department-blue">{faculty.position}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p><span className="font-medium">Qualification:</span> {faculty.qualification}</p>
                  <p><span className="font-medium">Experience:</span> {faculty.experience}</p>
                  <p><span className="font-medium">Specialization:</span> {faculty.specialization}</p>
                  <p><span className="font-medium">Email:</span> {faculty.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;
