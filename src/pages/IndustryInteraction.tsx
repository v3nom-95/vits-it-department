
import React from 'react';
import Layout from '../components/Layout';
import { Building2, Handshake, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndustryInteraction = () => {
  const interactions = [
    {
      title: "Industry Partnerships",
      icon: <Building2 className="h-10 w-10 text-department-purple" />,
      description: "Collaborating with leading companies to provide students with industry-relevant skills and knowledge through workshops, internships, and joint research projects."
    },
    {
      title: "Placement Opportunities",
      icon: <Handshake className="h-10 w-10 text-department-purple" />,
      description: "Working with industry partners to create placement opportunities for our students, ensuring they have a smooth transition from academia to professional careers."
    },
    {
      title: "Industrial Visits & Expert Lectures",
      icon: <Users className="h-10 w-10 text-department-purple" />,
      description: "Regular industrial visits and expert lectures from industry professionals to keep students updated with current trends and technologies."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-department-dark mb-4">Industry Institution Interaction</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between academic learning and industry requirements through meaningful collaborations and interactions.
          </p>
          <div className="w-20 h-1 bg-department-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interactions.map((item, index) => (
            <Card key={index} className="card-hover-effect border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-department-purple/10 p-4 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-department-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold font-heading text-department-dark mb-6">Our Industry Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-gray-400 text-lg font-medium">Partner {item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-department-dark mb-6">Recent Industry Interactions</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
                <div className="bg-gray-200 w-full md:w-48 h-32 shrink-0 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Event Image</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-department-dark mb-2">Industry Interaction Event {item}</h3>
                  <p className="text-gray-500 mb-2">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryInteraction;
