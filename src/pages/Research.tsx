import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Research = () => {
  const researchWorks = [
    {
      fieldOfStudy: "Artificial Intelligence",
      topic: "Next-Gen in-Vehicle Interaction: Wibots Wireless Network Edge Based Gesture Recognition By Using Machine Learning ",
      faculty: "Mrs. T. Aruna",
    },
    {
      fieldOfStudy: "Artificial Intelligence",
      topic: "EFFICIENT SUPERVISED MACHINE LEARNING FOR CYBERSECURITY APPLICATIONS USING ADAPTIVE FEATURE SELECTION AND EXPLAINABLE AI SCENARIOS",
      faculty: "Dr. M. Prabhakar",
    },
    {
      fieldOfStudy: "Artificial Intelligence",
      topic: "Web Spoofing Prevention: Machine Learning basedClient-Side Defence",
      faculty: "Mr. G. Chanakya",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Eduflex Card–A Digital Card for Student Account",
      faculty: "Mr. G. Chanakya",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Hypokinetic Rigid Syndrome: Early Prediction of Parkinson’s Disease using Ensemble classifiers",
      faculty: "Dr. M. Prabhakar",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Artificial Intelligence based Multi-Face Recognition and Attendance Marking System",
      faculty: "Mr. J. Srikanth",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Smart Voting System Utilizing Iris Recognition Technology",
      faculty: "Mr. J. Srikanth",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Analysis of Advanced Technology Integrated Interviews",
      faculty: "Mr. Sk. Khaleelullah",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "DietRx: Machine Learning Enhanced DiseaseSpecific Nutrition and Precautions",
      faculty: "Mr. Sk. Khaleelullah",
    },
    {
      fieldOfStudy: "machine Learning",
      topic: "Federated Learning-Driven Decentralized Intelligence for Explainable Anomaly Detection in Industrial Operations",
      faculty: "Dr. M. Prabhakar",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Comprehensive Surveillance: A Computer Vision Approach to Proctoring",
      faculty: "Mr. Sk. Khaleelullah",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Machine Learning for Web Security: Strategies to Detect and Prevent Malicious Activities",
      faculty: "Mr. G. Chanakya",
    },
    {
      fieldOfStudy: "machine Learning",
      topic: "Revealing Cyber Risks: Innovating Malicious URL Detection with Diverse Machine Learning Strategies",
      faculty: "Mr. G. Chanakya",
    },
    {
      fieldOfStudy: "Machine Learning",
      topic: "Automated Mitotic Nuclei Classification Using Fruitfly Optimization Algorithm with Machine Learning on Breast Cancer Diagnosis",
      faculty: "Mrs. T. Aruna",
    },
    {
      fieldOfStudy: "machine Learning",
      topic: "TRAFFIC ROUTE PREDICTION",
      faculty: "Dr. M. Prabhakar",
    },
    {
      fieldOfStudy: "Blockchain",
      topic: "Blockchain Anchored Federated Learning and Tokenized Traceability for Sustainable Food Supply Chains",
      faculty: "Dr. B. Naveen Kumar",
    },
    {
      fieldOfStudy: "Deep Learning",
      topic: "Deep Fake Detection using Adversarial Ensemble Techniquess",
      faculty: "Prof. B.V. Chowdary",
    },
    {
      fieldOfStudy: "Deep Learning",
      topic: "Interview Brilliance: Harnessing AI for Confidence-Driven Evaluation",
      faculty: "Dr. B. Naveen Kumar",
    },
    {
      fieldOfStudy: "Deep Learning",
      topic: "Analyzing and Detecting Digital Counterfeit Images using DenseNet, ResNet and CNN",
      faculty: "Prof. B.V. Chowdary",
    },
    {
      fieldOfStudy: "Deep Learning",
      topic: "Enhancing Urban Mobility: Deep Learning-Based Traffic Sign Assistant for the Visually Impaired",
      faculty: "Dr. M. Prabhakar",
    },
    {
      fieldOfStudy: "Internet of Things",
      topic: "BUILDING ROBUST IOT NETWORKS WITH DYNAMIC LAYER PRIORITIZATION AND PREDICTIVE FAULT MANAGEMENT PROCESS",
      faculty: "Prof. B.V. Chowdary",
    },
  ];

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
        <div className="space-y-8">
          {researchWorks.map((work, index) => (
            <Card key={index} className="shadow-lg border-t-4 border-department-purple hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-department-purple/5 to-department-purple/10">
                <CardTitle className="text-xl text-department-purple font-semibold">{work.topic}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700"><strong>Field of Study:</strong> {work.fieldOfStudy}</p>
                <p className="text-gray-700"><strong>Faculty:</strong> {work.faculty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Research;
