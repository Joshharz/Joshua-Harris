
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { SUCCESS_RATE_DATA } from '../constants';

const StatCard: React.FC<{ title: string; value: string; description: string }> = ({ title, value, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-5xl font-extrabold text-primary">{value}</p>
        <h3 className="text-xl font-semibold text-slate-700 mt-2">{title}</h3>
        <p className="text-slate-500 mt-1">{description}</p>
    </div>
);

const COLORS = ['#06b6d4', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

const SuccessRate = () => {
    const pieData = [
        { name: 'Satisfied', value: SUCCESS_RATE_DATA.overallSatisfaction },
        { name: 'Other', value: 100 - SUCCESS_RATE_DATA.overallSatisfaction },
    ];
    const pieColors = ['#06b6d4', '#e0f2fe'];

    return (
        <div className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800">Our Commitment to Excellence</h1>
                    <p className="mt-2 max-w-3xl mx-auto text-lg text-slate-600">
                        We believe in transparency and are proud to share our performance metrics. Our success is measured by your health and satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                   <StatCard title="Overall Satisfaction" value={`${SUCCESS_RATE_DATA.overallSatisfaction}%`} description="Based on over 10,000 patient surveys."/>
                   <StatCard title="Successful Recovery Rate" value={`${SUCCESS_RATE_DATA.recoveryRate}%`} description="Across all major treatment categories."/>
                   <StatCard title="Top Specialists" value="50+" description="Board-certified experts in their fields."/>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Bar Chart Section */}
                    <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-700 mb-6">Success Rate by Department</h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={SUCCESS_RATE_DATA.byDepartment}
                                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                                layout="vertical"
                            >
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis type="number" domain={[80, 100]} unit="%" />
                                <YAxis dataKey="name" type="category" width={90} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Legend />
                                <Bar dataKey="success" name="Success Rate" fill="#10b981" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Pie Chart Section */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4">Patient Satisfaction</h2>
                         <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                        </ResponsiveContainer>
                        <p className="text-center text-slate-500 mt-4">Our high satisfaction rate reflects our dedication to patient care.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessRate;
