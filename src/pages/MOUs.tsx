import React from 'react';
import Layout from '../components/Layout';

const MOUs = () => {
    return (
        <Layout>
            <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">MoUs</h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6">
                        Explore our institutional collaborations and MoUs with various organizations and companies.
                    </p>
                    {/* Replace the below with dynamic data or cards if needed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-department-purple">Company A</h2>
                            <p className="text-gray-600">MoU signed in 2023 for collaborative research and student training programs.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-department-blue">Organization B</h2>
                            <p className="text-gray-600">Industry-academic partnership established for internships and workshops.</p>
                        </div>
                        {/* Add more MoUs here */}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MOUs;
