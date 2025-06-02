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
      studentName: "K. Sanjana",
      rollNo: "21891A1221",
      issuedBy: "Covalensedigital Solutions Private Limited",
      topic: "Internship",
    },
    {
      studentName: "B. Pavan Babu",
      rollNo: "22891A1207",
      issuedBy: "Rao Associates",
      topic: "Internship",
    },

    {
      studentName: "Canjeevaram Raju Hrithik, Chiluveru Navya Sri, M Sai Rithika, Sai Rishika Madala",
      rollNo: "22891A1211, 22891A1213, 22891A1232, 22891A1251",
      issuedBy: "StartupIndia",
      topic: "Internship",
    },

    {
      studentName: "Bandigari Harichandana, Bobbala Rohith Reddy, Hapavath Nithin,Katukuri Vijitha,Komirishetty Keerthana,Dussa Greeshma,Peddi Sravani, Puralasetti Supriya, Rokandla Dhikshith Raj, Shaik Farha Begum, S Harshith Kumar Goud, Survi Aishwarya, Varakala Charvitha,Shaik Muskan, J Jagannath Preetham",
      rollNo: "22891A1208, 22891A1209, 22891A1221, 22891A1226, 22891A1227, 22891A1228, 22891A1239, 22891A1244, 22891A1250, 22891A1255, 22891A1257, 22891A1258, 22891A1260, 23895A1203, 23895A1205",
      issuedBy: "Collabaration of Swecha & IIT Hyderabad",
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
                <p className="text-gray-700 text-lowercase text-justify"><strong>Student Name:</strong> {achievement.studentName}</p>
                <p className="text-gray-700 text-justify "><strong>Roll No.:</strong> {achievement.rollNo}</p>
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
