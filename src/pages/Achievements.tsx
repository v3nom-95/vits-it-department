import React from 'react';
import Layout from '../components/Layout'; // Assuming Layout provides consistent page structure

const studentAchievements = [
  {
    studentName: "Idukuda Venkatapathi Babu",
    rollNo: "23891A1225",
    issuedBy: "Indian Institute of Technology, Madras",
    topic: "Foundation level in Programming and Data Science",
    date: "April 2025",
    academicYear: "2024-25",
    count: "1",
  },
  {
    studentName: "K. Sanjana",
    rollNo: "21891A1221",
    issuedBy: "Covalensedigital Solutions Private Limited",
    topic: "Internship",
    date: "January 2025",
    academicYear: "2024-25",
    count: "1",
  },
  {
    studentName: "Canjeevaram Raju Hrithik, Chiluveru Navya Sri, M Sai Rithika, Sai Rishika Madala",
    rollNo: "22891A1211, 22891A1213, 22891A1232, 22891A1251",
    issuedBy: "StartupIndia",
    topic: "Internship",
    date: "January 2025",
    academicYear: "2024-25",
    count: "4",
  },
  {
    studentName: "B. Pavan Babu",
    rollNo: "22891A1207",
    issuedBy: "Rao Associates",
    topic: "Internship",
    date: "March 2025",
    academicYear: "2024-25",
    count: "1",
  },
  {
    studentName: "Bandigari Harichandana, Bobbala Rohith Reddy, Hapavath Nithin, Katukuri Vijitha, Komirishetty Keerthana, Dussa Greeshma, Peddi Sravani, Puralasetti Supriya, Rokandla Dhikshith Raj, Shaik Farha Begum, S Harshith Kumar Goud, Survi Aishwarya, Varakala Charvitha, Shaik Muskan, J Jagannath Preetham",
    rollNo: "22891A1208, 22891A1209, 22891A1221, 22891A1226, 22891A1227, 22891A1228, 22891A1239, 22891A1244, 22891A1250, 22891A1255, 22891A1257, 22891A1258, 22891A1260, 23895A1203, 23895A1205",
    issuedBy: "Collaboration of Swecha & IIIT Hyderabad",
    topic: "Internship",
    date: "May 2025",
    academicYear: "2024-25",
    count: "14",
  },
  {
    studentName: "A Jahnavi Reddy, A Alekya, G Bhuvan Sai Teja, T Tejeswar,V Preethi ",
    rollNo: "19891A1203, 19891A1206, 19891A1224, 19891A1253, 19891A1257",
    issuedBy: "OvalEdge (Stipend Rs. 25,000)",
    topic: "Internship",
    date: "August 2021",
    academicYear: "2021-22",
    count: "05",
  },
  {
    studentName: "A Jahnavi Reddy",
    rollNo: "19891A1203",
    issuedBy: "Eunimart (Stipend Rs. 25,000)",
    topic: "Internship",
    date: "September 2021",
    academicYear: "2021-22",
    count: "01",
  },
  {
    studentName: "R Pravenn Kumar",
    rollNo: "19891A1244",
    issuedBy: "Informatica  (Stipend Rs. 30,000)",
    topic: "Internship",
    date: "August 2022",
    academicYear: "2022-23",
    count: "01",
  },
  {
    studentName: "E Shiva Ram, P. Nischal",
    rollNo: "19891A1223, 19891A1242",
    issuedBy: "EnergyTech Global  (Stipend Rs. 15,000)",
    topic: "Internship",
    date: "August 2022",
    academicYear: "2022-23",
    count: "02",
  },
  {
    studentName: "B Sri vamshi Teja, B Srinivas Anmol, E Kavitha, K Sai Chandana, T Ajay Purushotham, T Ganesh, V Vennela, G Manjusha",
    rollNo: "19891A1210, 19891A1213, 19891A1224, 19891A1235, 19891A1247, 19891A1252, 20895A1203",
    issuedBy: "unschool.in  (Stipend Rs. 30,000)",
    topic: "Internship",
    date: "November 2022",
    academicYear: "2022-23",
    count: "08",
  },
  {
    studentName:
        "B Sri vamshi Teja, B Srinivas Anmol, E Kavitha, K Sai Chandana, T Ajay Purushotham, T Ganesh, V Vennela, G Manjusha",
    rollNo:
        "120891A1216, 20891A1223, 20891A1224, 20891A1230, 20891A1233, 20891A1235, 20891A1240, 20891A1248, 20891A1251",
    issuedBy: "unschool.in",
    topic: "Internship",
    date: "November 2023",
    academicYear: "2023-24",
    count: "09",
  },
];

const Achievements = () => {

  // Group by academic year summary
  const summaryByAcademicYear = studentAchievements.reduce((acc, achievement) => {
    const year = achievement.academicYear || 'Unknown'; // Use academicYear for consistency
    if (!acc[year]) {
      acc[year] = {
        internships: 0,
        others: 0,
      };
    }
    const count = Number(achievement.count) || 0;
    if (achievement.topic.toLowerCase().includes('internship')) { // Use .includes for flexibility
      acc[year].internships += count;
    } else {
      acc[year].others += count;
    }
    return acc;
  }, {});

  // Sort academic years (e.g., "2021-22" then "2022-23")
  const academicYears = Object.keys(summaryByAcademicYear).sort();

  // Group achievements by date
  const groupedByDate = studentAchievements.reduce((acc, achievement) => {
    const date = achievement.date || 'Unknown';
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(achievement);
    return acc;
  }, {});

  // Sort dates DESCENDING (newest first)
  const sortedDates = Object.keys(groupedByDate).sort((a, b) => {
    const parseMonthYear = (str) => {
      const monthMap = {
        "January": 0, "February": 1, "March": 2, "April": 3,
        "May": 4, "June": 5, "July": 6, "August": 7,
        "September": 8, "October": 9, "November": 10, "December": 11
      };
      const [monthName, yearStr] = str.split(' ');
      const monthIndex = monthMap[monthName];
      const year = parseInt(yearStr, 10);
      return new Date(year, monthIndex, 1);
    };

    const dateA = parseMonthYear(a);
    const dateB = parseMonthYear(b);
    return dateB.getTime() - dateA.getTime(); // Sort descending
  });

  return (
      <Layout>
        <section className="py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center bg-gray-50 min-h-screen">
          <h1 className="text-4xl font-extrabold mb-12 text-center text-indigo-800 tracking-wide leading-tight">
            Our Students' Brilliant Accomplishments
          </h1>

          {/* --- Academic Year Summary --- */}
          <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-6 mb-12 border border-blue-100 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-700">
              Glance at Student Success
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-blue-200 text-center">
                <thead className="bg-department-blue text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-tl-lg">
                    Academic Year
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                    Internships
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                    Specialized Training
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-tr-lg">
                    Total Students
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-200">
                {academicYears.map((year) => {
                  const { internships, others } = summaryByAcademicYear[year];
                  const total = internships + others;
                  return (
                      <tr key={year} className="hover:bg-blue-50 transition duration-150 ease-in-out">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                          {internships}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {others}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-department-purple">
                          {total}
                        </td>
                      </tr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </div>

          {/* --- Detailed Achievements Timeline --- */}
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-department-blue">
              Timeline of Success
            </h2>
            {sortedDates.map((date) => (
                <div key={date} className="mb-12 relative">
                  <h3 className="text-2xl font-bold text-teal-600 mb-6 sticky top-0 bg-gray-50 py-2 z-10 px-4 md:px-0 w-full border-b-2 border-teal-200 shadow-sm">
                    {date}
                  </h3>
                  <div className="border-l-4 border-teal-400 pl-8 space-y-8"> {/* Adjusted padding */}
                    {groupedByDate[date].map((achievement, index) => (
                        <div key={index} className="relative group">
                          <span className="absolute w-5 h-5 bg-teal-500 rounded-full -left-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 border-4 border-white z-10 transition-transform duration-300 group-hover:scale-125"></span>
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                            <h4 className="text-xl font-bold text-teal-700 mb-2">
                              {achievement.topic} ({achievement.count} student{Number(achievement.count) > 1 ? 's' : ''})
                            </h4>
                            <p className="text-md text-gray-700 mb-2">
                              <span className="font-semibold">Issued By:</span> {achievement.issuedBy}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              <span className="font-medium">Student Name(s):</span> {achievement.studentName}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Roll Number(s):</span> {achievement.rollNo}
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </section>
      </Layout>
  );
};

export default Achievements;