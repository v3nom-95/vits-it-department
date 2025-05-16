import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Research = () => {
  const priorityOrder = ['Prof.', 'Dr.', 'Mrs.', 'Mr.'];
  const facultyOrder = [
    "Prof. B.V. Chowdary",
    "Dr. M. Prabhakar",
    "Dr. B. Naveen Kumar",
    "Mr. Sk. Khaleelullah",
    "Mrs. T. Aruna",
    "Mr. G. Chanakya",
    "Mr. J. Srikanth",
    "Mr. M.S.B Kasyapa",
    "Mr. G. Rama Krishna",
    "Mrs. CH. Sai Vijaya",
  ];

  const researchWorks = [
    { fieldOfStudy: "AI & Machine Learning", topic: "Next-Gen in-Vehicle Interaction", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "EFFICIENT SUPERVISED MACHINE LEARNING", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Web Spoofing Prevention", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Eduflex Card", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Hypokinetic Rigid Syndrome", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Multi-Face Recognition", faculty: "Mr. J. Srikanth" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Smart Voting System", faculty: "Mr. J. Srikanth" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Advanced Technology Interviews", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "DietRx", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Federated Learning for Anomaly Detection", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Computer Vision Proctoring", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Malicious Activities Detection", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Malicious URL Detection", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Mitotic Nuclei Classification", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "TRAFFIC ROUTE PREDICTION", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "Blockchain", topic: "Blockchain for Food Supply", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "Deep Learning", topic: "Deep Fake Detection", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Deep Learning", topic: "Interview Brilliance", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "Deep Learning", topic: "Digital Counterfeit Detection", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Deep Learning", topic: "Traffic Sign Assistant", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "Internet of Things", topic: "IOT Networks", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Blockchain", topic: "Blockchain Beyond Finance", faculty: "Mr. M.S.B Kasyapa" },
    { fieldOfStudy: "AI & Machine Learning", topic: "IPL Score Prediction", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Multi Crop Detection", faculty: "Mr. M.S.B.Kasyapa" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Grain Quality Testing", faculty: "Mr. M.S.B.Kasyapa" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Real-Time Sentiment Analysis", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Professional Pathway Hub", faculty: "Mr. J. Srikanth" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Cardiovascular Prediction", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Document Clustering", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Real Estate System", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Missing Child Detection", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Facial Gesture Cursor", faculty: "Mr. Sk. Khaleelullah" },
  ];

  // Grouping logic
  const groupedResearch: Record<string, { faculty: string[]; topics: string[] }> = researchWorks.reduce((acc, work) => {
    if (!acc[work.fieldOfStudy]) {
      acc[work.fieldOfStudy] = { faculty: [], topics: [] };
    }
    acc[work.fieldOfStudy].topics.push(work.topic);

    if (!acc[work.fieldOfStudy].faculty.includes(work.faculty)) {
      acc[work.fieldOfStudy].faculty.push(work.faculty);
    }

    return acc;
  }, {});

  // Sort faculty in each field based on designation priority
  // Sort faculty in each field based on explicit facultyOrder
  Object.entries(groupedResearch).forEach(([field, data]) => {
    data.faculty.sort((a, b) => {
      const aIndex = facultyOrder.findIndex(name => a.includes(name));
      const bIndex = facultyOrder.findIndex(name => b.includes(name));
      return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex);
    });
  });


  const [selectedField, setSelectedField] = useState<string | null>(null);

  return (
      <Layout>
        <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Research Works</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
              In an era defined by rapid technological advancement, research and innovation have become integral to academic excellence and societal progress. At our department, we have established dedicated research groups focusing on cutting-edge domains. These groups are designed to foster a culture of inquiry, collaboration, and applied research among faculty and students. By working on real-world problems and interdisciplinary projects, our research groups aim to contribute impactful solutions and advance the frontiers of knowledge in their respective areas.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {selectedField === null ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(groupedResearch).map(([field, { faculty }], index) => (
                    <Card
                        key={index}
                        className="shadow-lg border-t-4 border-department-purple hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                        onClick={() => setSelectedField(field)}
                    >
                      <CardHeader className="bg-gradient-to-r from-department-purple/5 to-department-purple/10">
                        <CardTitle className="text-xl text-department-purple font-semibold">{field}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h2 className="text-lg font-bold text-department-dark">Research Advisors</h2>
                        <ul className="list-disc list-inside text-gray-700">
                          {faculty.map((name, idx) => (
                              <li key={idx}>{name}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                ))}
              </div>
          ) : (
              <div>
                <button
                    className="mb-6 bg-department-purple text-white px-4 py-2 rounded"
                    onClick={() => setSelectedField(null)}
                >
                  Back to Fields
                </button>
                <h2 className="text-3xl font-bold mb-4 text-department-dark">{selectedField}</h2>
                <ul className="list-disc list-inside text-gray-800">
                  {groupedResearch[selectedField].topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
          )}
        </div>
      </Layout>
  );
};

export default Research;
