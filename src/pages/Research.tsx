import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Research = () => {
  const researchWorks = [
    { fieldOfStudy: "AI & Machine Learning", topic: "Next-Gen in-Vehicle Interaction: Wibots Wireless Network Edge Based Gesture Recognition By Using Machine Learning", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "EFFICIENT SUPERVISED MACHINE LEARNING FOR CYBERSECURITY APPLICATIONS USING ADAPTIVE FEATURE SELECTION AND EXPLAINABLE AI SCENARIOS", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Web Spoofing Prevention: Machine Learning basedClient-Side Defence", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Eduflex Card–A Digital Card for Student Account", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Hypokinetic Rigid Syndrome: Early Prediction of Parkinson’s Disease using Ensemble classifiers", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Artificial Intelligence based Multi-Face Recognition and Attendance Marking System", faculty: "Mr. J. Srikanth" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Smart Voting System Utilizing Iris Recognition Technology", faculty: "Mr. J. Srikanth" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Analysis of Advanced Technology Integrated Interviews", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "DietRx: Machine Learning Enhanced DiseaseSpecific Nutrition and Precautions", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Federated Learning-Driven Decentralized Intelligence for Explainable Anomaly Detection in Industrial Operations", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Comprehensive Surveillance: A Computer Vision Approach to Proctoring", faculty: "Mr. Sk. Khaleelullah" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Machine Learning for Web Security: Strategies to Detect and Prevent Malicious Activities", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Revealing Cyber Risks: Innovating Malicious URL Detection with Diverse Machine Learning Strategies", faculty: "Mr. G. Chanakya" },
    { fieldOfStudy: "AI & Machine Learning", topic: "Automated Mitotic Nuclei Classification Using Fruitfly Optimization Algorithm with Machine Learning on Breast Cancer Diagnosis", faculty: "Mrs. T. Aruna" },
    { fieldOfStudy: "AI & Machine Learning", topic: "TRAFFIC ROUTE PREDICTION", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "Blockchain", topic: "Blockchain Anchored Federated Learning and Tokenized Traceability for Sustainable Food Supply Chains", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "Deep Learning", topic: "Deep Fake Detection using Adversarial Ensemble Techniquess", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Deep Learning", topic: "Interview Brilliance: Harnessing AI for Confidence-Driven Evaluation", faculty: "Dr. B. Naveen Kumar" },
    { fieldOfStudy: "Deep Learning", topic: "Analyzing and Detecting Digital Counterfeit Images using DenseNet, ResNet and CNN", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Deep Learning", topic: "Enhancing Urban Mobility: Deep Learning-Based Traffic Sign Assistant for the Visually Impaired", faculty: "Dr. M. Prabhakar" },
    { fieldOfStudy: "Internet of Things", topic: "BUILDING ROBUST IOT NETWORKS WITH DYNAMIC LAYER PRIORITIZATION AND PREDICTIVE FAULT MANAGEMENT PROCESS", faculty: "Prof. B.V. Chowdary" },
    { fieldOfStudy: "Blockchain", topic: "The Role of Blockchain in Transforming Industries Beyond Finance", faculty: "Mr. M.S.B Kasyapa" },
  ];

  const groupedResearch: Record<string, { faculty: string[]; topics: string[] }> = researchWorks.reduce((acc, work) => {
    if (!acc[work.fieldOfStudy]) {
      acc[work.fieldOfStudy] = { faculty: [], topics: [] };
    }
    acc[work.fieldOfStudy].topics.push(work.topic);

    // Insert faculty names in the desired order for AI & Machine Learning
    if (work.fieldOfStudy === "AI & Machine Learning") {
      if (!acc[work.fieldOfStudy].faculty.includes(work.faculty)) {
        if (work.faculty.startsWith("Dr.")) {
          acc[work.fieldOfStudy].faculty.unshift(work.faculty);
        } else if (work.faculty === "Mr. Sk. Khaleelullah") {
          acc[work.fieldOfStudy].faculty.splice(1, 0, work.faculty);
        } else {
          acc[work.fieldOfStudy].faculty.push(work.faculty);
        }
      }
    } else {
      if (!acc[work.fieldOfStudy].faculty.includes(work.faculty)) {
        acc[work.fieldOfStudy].faculty.push(work.faculty);
      }
    }

    return acc;
  }, {});

  const [selectedField, setSelectedField] = useState<string | null>(null);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Research Works</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Explore the groundbreaking research conducted by our faculty and students in various fields of study.
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
              className="mb-4 px-4 py-2 bg-department-purple text-white rounded hover:bg-department-dark transition"
              onClick={() => setSelectedField(null)}
            >
              Back to Fields of Study
            </button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-department-dark mb-4">Research Topics in {selectedField}</h2>
              {groupedResearch[selectedField]?.topics.map((topic, idx) => (
                <Card key={idx} className="shadow-lg border-t-4 border-department-purple hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                  <CardHeader className="bg-gradient-to-r from-department-purple/5 to-department-purple/10">
                    <CardTitle className="text-xl text-department-purple font-semibold">{topic}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Research;
