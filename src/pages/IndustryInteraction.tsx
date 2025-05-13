
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Building2, Handshake, Users, Calendar, MapPin, Clock, Eye, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import EventCard from '../components/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  
  const studentEvents: Event[] = [
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
  
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowEventPhotos(true);
  };
  
  const handleViewAttendees = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setShowAttendees(true);
  };

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

        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-department-dark mb-6">Student Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentEvents.map((event) => (
              <div key={event.id} onClick={() => handleEventClick(event)} className="cursor-pointer">
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  imageSrc={event.imageSrc}
                />
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={(e) => handleViewAttendees(event, e)}
                    className="w-full flex items-center justify-center gap-2 border-department-purple text-department-purple hover:bg-department-purple hover:text-white transition-colors"
                  >
                    <Users className="h-4 w-4" />
                    View Attendees ({event.attendees.length})
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
      </div>

      {/* Photo Gallery Dialog */}
      <Dialog open={showEventPhotos} onOpenChange={setShowEventPhotos}>
        <DialogContent className="max-w-5xl sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedEvent?.title} - Gallery</DialogTitle>
            <DialogDescription>Photos from the event</DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {selectedEvent?.photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-md aspect-video">
                        <img 
                          src={photo} 
                          alt={`${selectedEvent.title} photo ${index + 1}`} 
                          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/800x450?text=Event+Photo";
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
              {selectedEvent?.photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-md aspect-[4/3]">
                  <img 
                    src={photo} 
                    alt={`${selectedEvent.title} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => {
                      // In a real implementation, this would select the image in the carousel
                      console.log("Selected image", index);
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x300?text=Event+Photo";
                    }}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={() => setShowEventPhotos(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Attendees Dialog */}
      <Dialog open={showAttendees} onOpenChange={setShowAttendees}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedEvent?.title} - Attendees</DialogTitle>
            <DialogDescription>Students who attended this event</DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list" className="mt-4">
                <div className="space-y-2">
                  {selectedEvent?.attendees.map((attendee) => (
                    <div key={attendee.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-md">
                      <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarImage src={attendee.avatar} alt={attendee.name} />
                        <AvatarFallback>{attendee.name.charAt(0)}{attendee.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{attendee.name}</p>
                        <p className="text-xs text-gray-500">{attendee.department}, {attendee.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="grid" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedEvent?.attendees.map((attendee) => (
                    <div key={attendee.id} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-md">
                      <Avatar className="h-16 w-16 mb-2 border-2 border-department-purple/20">
                        <AvatarImage src={attendee.avatar} alt={attendee.name} />
                        <AvatarFallback>{attendee.name.charAt(0)}{attendee.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium leading-tight">{attendee.name}</p>
                      <p className="text-xs text-gray-500">{attendee.department}</p>
                      <p className="text-xs text-gray-500">{attendee.year}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end mt-6">
              <Button onClick={() => setShowAttendees(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default IndustryInteraction;
