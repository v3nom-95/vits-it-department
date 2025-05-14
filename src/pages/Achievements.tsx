import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const studentAchievements = [
    {
      studentName: "Idukuda Venkatapathi Babu",
      rollNo: "23891A1225",
      issuedBy: "Indian Institute of Technology, Madras",
      topic: "Foundation level in Programming and Data Science",
    },
    {
      studentName: "B. Pavan Babu",
      rollNo: "22891A1207",
      issuedBy: "Rao Associates",
      topic: "Internship",
    },
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Student Achievements</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Explore the remarkable achievements of our students in certifications and professional development.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {studentAchievements.map((achievement, index) => (
            <Card key={index} className="shadow-lg border-t-4 border-department-blue hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-department-blue/5 to-department-blue/10">
                <CardTitle className="text-xl text-department-blue font-semibold">{achievement.topic}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700"><strong>Student Name:</strong> {achievement.studentName}</p>
                <p className="text-gray-700"><strong>Roll No.:</strong> {achievement.rollNo}</p>
                <p className="text-gray-700"><strong>Issued By:</strong> {achievement.issuedBy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
