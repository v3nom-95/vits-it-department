import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Prof. B.V. Chowdary  ",
      position: "Head of Department",
      qualification: "Ph.D. in Computer Science Engineering",
      experience: "15+ years of teaching and research experience",
      specialization: "Data Mining, Machine Learning",
      email: "",
      publications: 24,
      awards: "Best Researcher Award 2022",
      image: "/BV-IT-HOD.jpg"
    },
    {
      id: 2,
      name: "Dr. M. Prabhakar",
      position: "Associate Professor",
      qualification: "Ph.D.",
      experience: "12 years of teaching experience",
      specialization: "Database Management Systems, Data Mining",
      email: "meena.gupta@vits.ac.in",
      publications: 15,
      awards: "Excellence in Teaching 2021",
      image: "/pp.jpeg"
    },
    {
      id: 3,
      name: "Dr. B. Naveen Kumar",
      position: "Associate Professor",
      qualification: "Ph.D.",
      experience: "8 years of teaching and 4 years of industry experience",
      specialization: "Computer Networks, Cloud Computing",
      email: "rajesh.kumar@vits.ac.in",
      publications: 12,
      awards: "Young Scientist Award 2020",
      image: "/nk.jpeg"
    },
    {
      id: 4,
      name: "Mr. Sk. Khaleelullah",
      position: "Assistant Professor",
      qualification: "M.Tech in Computer Science",
      experience: "9 years of teaching experience",
      specialization: "Web Technologies, Software Engineering",
      email: "sanjay.verma@vits.ac.in",
      publications: 8,
      awards: "Best Project Mentor 2023",
      image: "/faculty4.png"
    },
    {
      id: 5,
      name: "Mrs. T. Aruna",
      position: "Assistant Professor",
      qualification: "Ph.D. in Information Security",
      experience: "7 years of teaching and research experience",
      specialization: "Cybersecurity, Cryptography",
      email: "priya.singh@vits.ac.in",
      publications: 18,
      awards: "Women in Tech Award 2022",
      image: "/ta.jpeg"
    },
    {
      id: 6,
      name: "Mr. J. Srikanth",
      position: "Assistant Professor",
      qualification: "M.Tech in Software Engineering",
      experience: "6 years of teaching and 3 years of industry experience",
      specialization: "Mobile Application Development, IoT",
      email: "amit.kumar@vits.ac.in",
      publications: 6,
      awards: "Innovation Award 2021",
      image: "/faculty6.png"
    },
    {
      id: 7,
      name: "Mr. A. Sankar Reddy",
      position: "Assistant Professor",
      qualification: "Ph.D. in Artificial Intelligence",
      experience: "10 years of teaching and 5 years of research experience",
      specialization: "Artificial Intelligence, Natural Language Processing",
      email: "anjali.mehta@vits.ac.in",
      publications: 20,
      awards: "AI Research Excellence Award 2023",
      image: "/asr.jpg"
    },
    {
      id: 8,
      name: "Mr. M.S.B Kasyapa",
      position: "Assistant Professor",
      qualification: "Ph.D. in Data Science",
      experience: "8 years of teaching experience",
      specialization: "Big Data Analytics, Predictive Modeling",
      email: "rajiv.menon@vits.ac.in",
      publications: 14,
      awards: "Data Science Innovator Award 2022",
      image: "/msb.jpeg"
    },
    {
      id: 9,
      name: "Mr. G. Ramakrishna",
      position: "Assistant Professor",
      qualification: "M.Tech in Information Technology",
      experience: "5 years of teaching experience",
      specialization: "Web Development, UI/UX Design",
      email: "kavita.sharma@vits.ac.in",
      publications: 5,
      awards: "Best Educator Award 2021",
      image: "/gr.jpeg"
    },
    {
      id: 10,
      name: "Mrs. Ch. Sai Vijaya",
      position: "Assistant Professor",
      qualification: "M.Tech in Software Systems",
      experience: "4 years of teaching and 2 years of industry experience",
      specialization: "Software Development, Agile Methodologies",
      email: "arjun.patel@vits.ac.in",
      publications: 3,
      awards: "Emerging Educator Award 2023",
      image: "/faculty10.png"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Our Faculty</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Meet our team of experienced educators and researchers dedicated to excellence in IT education.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 max-w-4xl">
          Our department has highly qualified and experienced faculty members dedicated to providing 
          quality education and mentoring to students. They bring a wealth of knowledge from both 
          academia and industry to ensure our students receive the best possible education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty) => (
            <Card key={faculty.id} className="overflow-hidden shadow-md card-hover-effect">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${faculty.id % 2 === 0 ? 'from-department-blue/5 to-department-blue/10' : 'from-department-purple/5 to-department-purple/10'} p-6 flex items-center gap-4`}>
                  <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                    {faculty.image ? (
                      <img src={faculty.image} className="h-full w-full object-cover rounded-full" />
                    ) : (
                      <AvatarFallback className={`${faculty.id % 2 === 0 ? 'bg-department-blue' : 'bg-department-purple'} text-white text-xl font-bold`}>
                        {faculty.name.split(' ').length > 1
                          ? faculty.name.split(' ')[0][0] + faculty.name.split(' ')[1][0]
                          : faculty.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg font-heading">{faculty.name}</h3>
                    <p className={`${faculty.id % 2 === 0 ? 'text-department-blue' : 'text-department-purple'} font-medium`}>{faculty.position}</p>
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

export default Faculty;
