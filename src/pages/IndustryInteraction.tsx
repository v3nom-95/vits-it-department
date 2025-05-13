import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Building2, Handshake, Users, Calendar, MapPin, Clock, Eye, X, User, IdCard, FileImage } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IndustryInteraction = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventPhotos, setShowEventPhotos] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);
  const [showCertificate, setShowCertificate] = useState<StudentInteraction | null>(null);
  const { toast } = useToast();
  
  interface Attendee {
    id: number;
    name: string;
    department: string;
    year: string;
    avatar?: string;
  }
  
  interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    imageSrc: string;
    photos: string[];
    attendees: Attendee[];
  }

  interface StudentInteraction {
    id: number;
    studentName: string;
    rollNumber: string;
    organization: string;
    interactionType: string;
    date: string;
    certificate?: string;
  }
  
  {/*const studentEvents: Event[] = [
    {
      id: 1,
      title: "Industry Expert Talk on AI",
      description: "Distinguished industry experts from leading tech companies discussed the latest advancements in artificial intelligence and its applications in various industries.",
      date: "March 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      imageSrc: "/event-chatgpt.png",
      photos: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ],
      attendees: [
        { id: 1, name: "Aditya Sharma", department: "CSE", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Priya Patel", department: "CSE", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=5" },
        { id: 3, name: "Rahul Verma", department: "IT", year: "2nd Year", avatar: "https://i.pravatar.cc/150?img=3" },
        { id: 4, name: "Sneha Gupta", department: "ECE", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=8" },
        { id: 5, name: "Vikram Singh", department: "CSE", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=11" }
      ]
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Hands-on workshop on modern web development technologies and frameworks led by industry professionals from leading tech companies.",
      date: "April 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "IT Lab Complex",
      imageSrc: "/event-webdev.png",
      photos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      ],
      attendees: [
        { id: 6, name: "Ananya Reddy", department: "CSE", year: "2nd Year", avatar: "https://i.pravatar.cc/150?img=20" },
        { id: 7, name: "Rohan Kumar", department: "IT", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=12" },
        { id: 8, name: "Meera Joshi", department: "CSE", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=9" },
        { id: 9, name: "Arjun Nair", department: "ECE", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=17" }
      ]
    },
    {
      id: 3,
      title: "Annual Industry-Academia Meet",
      description: "A collaborative platform where industry experts and academic professionals come together to discuss the future of technology education and industry requirements.",
      date: "May 10, 2025",
      time: "9:30 AM - 4:00 PM",
      location: "Conference Center",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      photos: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ],
      attendees: [
        { id: 10, name: "Karthik Menon", department: "CSE", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=15" },
        { id: 11, name: "Divya Sharma", department: "IT", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=23" },
        { id: 12, name: "Nikhil Reddy", department: "ECE", year: "2nd Year", avatar: "https://i.pravatar.cc/150?img=67" },
        { id: 13, name: "Sanya Kapoor", department: "CSE", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=45" },
        { id: 14, name: "Varun Singh", department: "CSE", year: "3rd Year", avatar: "https://i.pravatar.cc/150?img=33" },
        { id: 15, name: "Tanvi Gupta", department: "IT", year: "4th Year", avatar: "https://i.pravatar.cc/150?img=29" }
      ]
    }
  ]; */}

  const studentInteractions: StudentInteraction[] = [
    {
      id: 1,
      studentName: "Idukuda Venkatapathi Babu",
      rollNumber: "23891A1225",
      organization: "Indian Institute of Technology Madras",
      interactionType: "Course",
      date: "April 30, 2025",
      certificate: "/public/iv1.jpeg"
    },
    {
      id: 2,
      studentName: "Vure Sathvik",
      rollNumber: "23891A1264",
      organization: "Salesforce",
      interactionType: "Community event",
      date: "April 19, 2025",
      certificate: "/public/sf.jpeg"
    },
    {
      id: 3,
      studentName: "Idukuda Venkatapathi Babu",
      rollNumber: "23891A1225",
      organization: "Salesforce",
      interactionType: "Community meeting",
      date: "April 19, 2025",
      certificate: "/public/sf.jpeg"
    },
    {
      id: 4,
      studentName: "B.Pavan babu",
      rollNumber: "22891A1207",
      organization: "Rao Associatis",
      interactionType: "Internship",
      date: "February 24, 2025",
      certificate: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    },
    {
      id: 5,
      studentName: "M Sai Rithika",
      rollNumber: "22891A1232",
      organization: "StartupIndia",
      interactionType: "Internship",
      date: "January - March, 2025",
      certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b"
    },
    {
      id: 6,
      studentName: "Chiluveru Navya Sri",
      rollNumber: "22891A1213",
      organization: "StartupIndia",
      interactionType: "Internship",
      date: "January - March, 2025",
      certificate: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 7,
      studentName: "Sai Rishika Madala",
      rollNumber: "22891A1251",
      organization: "SatrtupIndia",
      interactionType: "Internship",
      date: "January - March, 2025",
      certificate: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
    },
    {
      id: 8,
      studentName: "Abhitej Salla",
      rollNumber: "23891A1201",
      organization: "Microsoft",
      interactionType: "Bootcamp",
      date: "May 5, 2025",
      certificate: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
    },
    {
      id: 9,
      studentName: "Buram Sai Rishika",
      rollNumber: "23891A1213",
      organization: "Microsoft",
      interactionType: "Bootcamp",
      date: "May 5, 2025",
      certificate: "https://images.unsplash.com/photo-1503676382389-4809596d5290"
    },
    {
      id: 10,
      studentName: "Konduri Mohith",
      rollNumber: "23891A1232",
      organization: "Microsoft",
      interactionType: "Bootcamp",
      date: "May 5, 2025",
      certificate: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6"
    }
  ];

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

        {/* Student Interaction Records Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-department-dark mb-6">Student Industry Interactions</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Student Name</TableHead>
                  <TableHead className="font-bold">Roll Number</TableHead>
                  <TableHead className="font-bold">Organization</TableHead>
                  <TableHead className="font-bold">Type of Interaction</TableHead>
                  <TableHead className="font-bold">Date</TableHead>
                  <TableHead className="font-bold">Certificate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentInteractions.map((interaction) => (
                  <TableRow key={interaction.id}>
                    <TableCell className="flex items-center gap-2">
                      <User size={16} className="text-department-purple" />
                      {interaction.studentName}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <IdCard size={16} className="text-department-purple" />
                        {interaction.rollNumber}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-department-purple" />
                        {interaction.organization}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Handshake size={16} className="text-department-purple" />
                        {interaction.interactionType}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-department-purple" />
                        {interaction.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      {interaction.certificate && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex items-center gap-2"
                          onClick={() => setShowCertificate(interaction)}
                        >
                          <FileImage size={16} className="text-department-purple" />
                          View
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Certificate Dialog */}
        {showCertificate && (
          <Dialog open={showCertificate !== null} onOpenChange={() => setShowCertificate(null)}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Certificate/Proof for {showCertificate.interactionType}</DialogTitle>
                <DialogDescription>
                  {showCertificate.studentName} - {showCertificate.organization}
                </DialogDescription>
              </DialogHeader>
              <div className="relative w-full aspect-video mt-4 rounded-md overflow-hidden">
                <img 
                  src={showCertificate.certificate} 
                  alt={`Certificate for ${showCertificate.interactionType} at ${showCertificate.organization}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowCertificate(null)}
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </Layout>
  );
};

export default IndustryInteraction;
