
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, BookOpen, Award, ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
      publications: 24,
      awards: "Best Researcher Award 2022",
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
      publications: 15,
      awards: "Excellence in Teaching 2021",
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
      publications: 12,
      awards: "Young Scientist Award 2020",
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
      publications: 8,
      awards: "Best Project Mentor 2023",
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
      publications: 18,
      awards: "Women in Tech Award 2022",
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
      publications: 6,
      awards: "Innovation Award 2021",
      image: "/faculty6.png"
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
                <div className={`bg-gradient-to-r ${faculty.id % 2 === 0 ? 'from-department-blue/5 to-department-blue/10' : 'from-department-purple/5 to-department-purple/10'} p-6 flex items-center gap-4 border-b`}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                          <AvatarFallback className={`${faculty.id % 2 === 0 ? 'bg-department-blue' : 'bg-department-purple'} text-white text-xl`}>
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className={`${faculty.id % 2 === 0 ? 'bg-department-blue' : 'bg-department-purple'} text-white`}>
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{faculty.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {faculty.publications} publications · {faculty.experience}
                          </p>
                          <div className="flex items-center pt-2">
                            <Award className="mr-1 h-3.5 w-3.5 text-department-purple" />
                            <span className="text-xs text-muted-foreground">{faculty.awards}</span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div>
                    <h3 className="font-semibold text-lg font-heading">{faculty.name}</h3>
                    <p className={`${faculty.id % 2 === 0 ? 'text-department-blue' : 'text-department-purple'} font-medium`}>{faculty.position}</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="font-medium">Qualification</p>
                    <p className="text-gray-600">{faculty.qualification}</p>
                  </div>
                  <div>
                    <p className="font-medium">Specialization</p>
                    <p className="text-gray-600">{faculty.specialization}</p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <a href={`mailto:${faculty.email}`} className="flex items-center text-sm text-gray-600 hover:text-department-purple">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>Email</span>
                    </a>
                    <a href="#" className="flex items-center text-sm text-gray-600 hover:text-department-blue">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>Publications</span>
                    </a>
                    <a href="#" className="flex items-center text-sm text-gray-600 hover:text-department-purple">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Profile</span>
                    </a>
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
