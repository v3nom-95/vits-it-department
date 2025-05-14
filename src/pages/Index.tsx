import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isGoalDialogOpen, setIsGoalDialogOpen] = useState(false);

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
                src="/pr.jpeg" 
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
            <Button
              className="bg-department-purple text-white hover:bg-department-purple-dark"
              onClick={() => setIsGoalDialogOpen(true)}
            >
              Goal
            </Button>
            <Tabs>
              <TabsList className="flex justify-center space-x-4">
                <TabsTrigger value="vision" className="px-4 py-2 text-lg font-semibold text-department-purple border-b-2 border-transparent hover:border-department-purple">Vision</TabsTrigger>
                <TabsTrigger value="mission" className="px-4 py-2 text-lg font-semibold text-department-blue border-b-2 border-transparent hover:border-department-blue">Mission</TabsTrigger>
                <TabsTrigger value="pso" className="px-4 py-2 text-lg font-semibold text-department-green border-b-2 border-transparent hover:border-department-green">Program Specific Outcomes</TabsTrigger>
              </TabsList>
              <TabsContent value="vision" className="mt-6">
                <p className="text-gray-700 text-lg">
                  To emerge as a premier center for education and research in computer science and engineeringand in transforming students into innovative professionals of contemporary and future technologies to cater the global needs of human resources for IT and ITES companies .


                </p>
              </TabsContent>
              <TabsContent value="mission" className="mt-6">
                <p className="text-gray-700 text-lg">
                  <li>
                  To produce excellent computer science professionals by imparting quality training, hands-on-experience and value based education.</li>

<li>To strengthen links with industry through collaborative partnerships in research & product development and student internships.</li>

<li>To promote research based projects and activities among the students in the emerging areas of technology.</li>

<li>To explore opportunities for skill development in the application of computer science among rural and under privileged population .</li>
                </p>
              </TabsContent>
              <TabsContent value="pso" className="mt-6">
                <p className="text-gray-700 text-lg">
                  <li>Professional Skills: Learn the basic concepts of Computer Science and Engineering and to apply them to various areas, like Data Structures, Operating Systems, Computer Organization, Computer Networks, Information Security etc., in the design and implementation of complex systems.</li>

<li>Problem-Solving Skills : Solutions to complex Computer Science and Engineering problems, using latest hardware and software tools, along with analytical skills to arrive at cost effective and appropriate solutions.</li>

<li>Entrepreneurship skills and career management : Social-awareness & environmental-wisdom along with ethical responsibility to lead a successful career and to sustain passion and zeal for real-world applications using optimal resources as an Entrepreneur.</li>


                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      {/* Goal Dialog */}
      <Dialog open={isGoalDialogOpen} onOpenChange={setIsGoalDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-department-purple">Department Goal</DialogTitle>
            <DialogDescription className="text-gray-700 mt-4">

<li>Regularly update the curriculum to reflect emerging technologies such as AI, IoT, cybersecurity, and cloud computing.</li>

<li>Foster Research and Innovation in IT</li>

<li>Promote interdisciplinary research, innovation labs, and publication in reputed journals and conferences.</li>

<li>Enhance Student Employability and Skill Development</li>

<li>Provide certifications, internships, and training programs in collaboration with industry partners.</li>

<li>Strengthen Industry-Academia Collaboration</li>

<li>Build partnerships with tech companies for internships, guest lectures, real-world projects, and curriculum inputs.</li>

<li>Ensure Quality Teaching and Continuous Learning</li>

<li>Adopt modern pedagogical tools such as flipped classrooms, online labs, and collaborative platforms.</li>

<li>Encourage Entrepreneurship and Start-up Culture</li>

<li>Support incubation centers, hackathons, and innovation challenges for students and faculty.</li>

<li>Improve Infrastructure and Technological Resources</li>

<li>Continuously upgrade labs, servers, and software tools to align with current industry standards.</li>

<li>Promote Ethical and Responsible Use of Technology</li>

<li>Emphasize cybersecurity, digital ethics, and data privacy in teaching and practice.</li>

<li>Achieve National and International Accreditations</li>

<li>Align programs with NBA/ABET accreditation standards to ensure quality and global recognition.</li>

<li>Encourage Global Exposure and Collaboration</li>

<li>Facilitate student and faculty exchange programs, MOUs with international institutions, and joint research.</li>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-16 transform-gpu will-change-auto">
        {/* Stats Section */}
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
