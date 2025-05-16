import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const placementData = [
  {
    year: '2022-2023',
    studentsPlaced:47 ,
    offers: 77,
    numberOfStudentsEligible: 50, // Renamed field
    topCompanies: ['Informatica', 'Eunimart', 'ADP', 'GlobalLogic'],
    highlight: 'Highest package: 11 LPA by Informatica',
    color: 'purple',
  },
  {
    year: '2023-2024',
    studentsPlaced: 37,
    offers: 54,
    numberOfStudentsEligible: 60, // Renamed field
    topCompanies: ['Infosys', 'TCS', 'Cognizant'],
    highlight: 'Highest package: 6 LPA',
    color: 'blue',
  },
  {
    year: '2024-2025',
    studentsPlaced: 16,
    offers: 23,
    numberOfStudentsEligible: 58, // Renamed field
    topCompanies: ['Rinex', 'GlobalLogic', 'Infosys', 'Cognizant'],
    highlight: 'Highest package 10 LPA offered. Ongoing placements',
    color: 'purple',
  },
];

const Placements = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Placements</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Explore our placement statistics and success stories for the last three years.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placementData.map((data, idx) => (
            <Card
              key={data.year}
              className={`transition-transform duration-300 shadow-lg border-t-4 cursor-pointer card-hover-effect ${data.color === 'purple' ? 'border-department-purple' : 'border-department-blue'} ${selected === idx ? 'scale-105 ring-2 ring-department-purple/40' : 'hover:scale-105'}`}
              onClick={() => setSelected(selected === idx ? null : idx)}
            >
              <CardHeader className={`bg-gradient-to-r ${data.color === 'purple' ? 'from-department-purple/5 to-department-purple/10' : 'from-department-blue/5 to-department-blue/10'}`}>
                <CardTitle className={`text-2xl ${data.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} font-semibold`}>{data.year}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 py-6">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-lg font-medium text-gray-700">Number of Students Eligible</span>
                  <span className="text-3xl font-bold text-department-dark">{data.numberOfStudentsEligible}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-lg font-medium text-gray-700">No. of Students Placed</span>
                  <span className="text-3xl font-bold text-department-dark">{data.studentsPlaced}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-lg font-medium text-gray-700">No. of Offers</span>
                  <span className="text-3xl font-bold text-department-dark">{data.offers}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-lg font-medium text-gray-700">Top Recruiters</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {data.topCompanies.map((company, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm font-semibold ${data.color === 'purple' ? 'bg-department-purple/10 text-department-purple' : 'bg-department-blue/10 text-department-blue'}`}>{company}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <span className={`text-base font-semibold ${data.color === 'purple' ? 'text-department-purple' : 'text-department-blue'}`}>{data.highlight}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-600 text-sm">
          * Click on a card to highlight and compare placement years.
        </div>
      </div>
    </Layout>
  );
};

export default Placements;
