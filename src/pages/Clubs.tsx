import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Award, User, Clock, MapPin } from 'lucide-react';
import EventCard, { EventCardProps } from '@/components/EventCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ClubEvent extends EventCardProps {
  clubId: number;
  photos: string[];
}

interface Club {
  id: number;
  name: string;
  description: string;
  studentCoordinators: string[];
  meetingSchedule: string;
  activities: string[];
  color: string;
  members: number;
  established: string;
}

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [showClubDetails, setShowClubDetails] = useState(false);

  const clubs: Club[] = [
    {
      id: 1,
      name: "InfyCoder",
      description: "A programming club focused on competitive coding, algorithm development, and problem-solving.",
      studentCoordinators: ["A K V S Chakravarthy", "Pittala Shrenik Kumar", "Bakuna Amulya", "R Khyathi Pradha", "Shaik Farha Begum","Kanteti Jaya Chandra"],
      meetingSchedule: "Every Saturday, 2:00 PM - 3:30 PM",
      activities: ["Weekly coding challenges", "Hackathons", "Guest lectures from industry experts"],
      color: "purple",
      members: 136,
      established: "2022"
    },
    {
      id: 2,
      name: "SpeakEasy club",
      description: "A club focussed on improving your verbal",
      studentCoordinators: ["M. Sai Rishitha", "JM. Praneetha", "M. Sai Rithika", "C. Navya Sri", "V. Sathvika"],
      meetingSchedule: "Every Tuesday, 3:30 PM - 5:30 PM",
      activities: ["Social Awareness activities", "Presentations", "JAM sessions"],
      color: "blue",
      members: 136,
      established: "2022"
    },
    {
      id: 3,
      name: "NextGen Innovators",
      description: "A club focussed on technical innovations and startups.",
      studentCoordinators: ["Venkatapathi Babu", " Vure Sathvik", "Md. Mudassir", "K. Rakesh Reddy", "K. Nikhil Jai"],
      meetingSchedule: "Every Wednesday, 2:00 PM - 3:30 PM",
      activities: ["IEP sessions", "Industry 4.0 sessions", "E-Summits"],
      color: "purple",
      members: 136,
      established: "2024"
    },
    {
      id: 4,
      name: "Arts Club",
      description: "A club that unleashes the artistic you.",
      studentCoordinators: ["D.suraj", "Sk.muskan", "K.vijitha", "K.balaji", "V.charvitha"],
      meetingSchedule: "Every Thursday, 3:30 PM - 5:00 PM",
      activities: ["Poster making", "Drawing competitions", "Quizzes"],
      color: "blue",
      members: 136,
      established: "2022"
    },
    {
      id: 5,
      name: "Sports club",
      description: "A club dedicated to sports, fitness, and athletic events for students.",
      studentCoordinators: ["R Saivivek", "S.Harshith kumar", "S.Aishwarya", "K.Asritha", "S. Sadwika"],
      meetingSchedule: "Every Friday, 4:00 PM - 5:30 PM",
      activities: ["Football matches", "Cricket tournaments", "Athletics training"],
      color: "purple",
      members: 136,
      established: "2022"
    }
  ];

  const clubEvents: ClubEvent[] = [
    {
      id: 1,
      clubId: 1, // CodeCraft
      title: "Competitive Programming Contest",
      description: "A 1.5 hour coding competition that will test your algorithm design, problem-solving skills, and efficiency. Prizes for top performers!",
      date: "May 3, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "B-603",
      host: "Dept. of IT",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      photos: [
        "/cce1.jpeg",
        
      ]
    },
    {
      id: 2,
      clubId: 1, // CodeCraft
      title: "Algorithm Deep Dive Workshop",
      description: "Learn advanced algorithmic techniques including dynamic programming, graph algorithms, and optimization strategies.",
      date: "November 16, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "B-603",
      host: "Dept. of IT",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      photos: [
        "cce2.jpeg",
        
      ]
    },
    {
      id: 3,
      clubId: 3, // NextGen Innovators
      title: "Design Thinking Workshop",
      description: "A session on the latest trends in technology and entrepreneurship. Learn how to turn your ideas into successful startups.",
      date: "December 4, 2024",
      time: "09:00 AM - 3:30 PM",
      location: "Room B-603",
      host: "Department of IT",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      photos: [
        "/ng1.jpg",
        "/ng2.jpg",
      ]
    },
    {
      id: 4,
      clubId: 3, // WebWizards
      title: "Concepts of Ideas and Innovation",
      description: " Learn about Ideas and Innovations.",
      date: "November 13, 2024",
      time: "9:00 AM - 3:30 PM",
      location: "Room B-603",
      host: "Department of IT",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      photos: [
        "/iep1.jpeg",
      ]
    },
    {
      id: 5,
      clubId: 2, // AI Innovators
      title: "Social Consciousness Seminar",
      description: "A seminar on the importance of social awareness and responsibility.",
      date: "Every week on Tuesday",
      time: "3:30 AM - 5:30 PM",
      location: "604-A",
      host: "Department of IT",
      imageSrc: "spe1.jpeg",
      photos: [
        "/spe1.jpeg",
        
      ]
    },
    {
      id: 6,
      clubId: 4, // AI Innovators
      title: "Jumble Jamboree",
      description: "A fun-filled event with games and activities to enhance your creativity and teamwork.",
      date: "August 9, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "604-A",
      host: "Department of IT",
      imageSrc: "art1.jpeg",
      photos: [
        "/art1.jpeg",
      ]
    },
    {
      id: 7,
      clubId: 5, // Sports club
      title: "SilverJubilee Sports Meet",
      description: "A grand event featuring multiple sports competitions including football and cricket.",
      date: "Feb, 2025",
      time: "9:00 AM - 5:30 PM",
      location: "Cricket Ground",
      host: "Sports Club in collaboration with the Department of IT",
      imageSrc: "sp2.jpg",
      photos: [
        "sp2.jpg",
        
      ]
    },
    {
      id: 8,
      clubId: 5, // Sports club
      title: "Intra-Department Cricket Tournament",
      description: "Department compete in a knockout cricket tournament. Open to all students!",
      date: "July 4, 2024",
      time: "3:30 PM - 5:30 PM",
      location: "Cricket Ground",
      host: "Department of IT",
      imageSrc: "/sp1.jpg",
      photos: [
        "/sp1.jpg",
        
      ]
    }
  ];

  const handleEventClick = (event: ClubEvent) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const getClubEvents = (clubId: number) => {
    return clubEvents.filter(event => event.clubId === clubId);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-department-purple/10 to-department-blue/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-department-dark">Department Clubs</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-0">
            Our department has a vibrant student community with several active clubs and societies. These clubs provide a platform for students to pursue their interests, develop leadership skills, and participate in various technical, cultural, and social activities throughout the year.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <p className="text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto text-center text-sm sm:text-base">
          The IT Department hosts several student-led clubs that provide opportunities for 
          hands-on learning, skill development, and networking. These clubs organize various 
          activities, workshops, competitions, and events throughout the academic year.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {clubs.map((club) => (
            <div key={club.id}>
              <Card 
                key={club.id} 
                className={`overflow-hidden shadow-lg border-t-4 ${club.color === 'purple' ? 'border-department-purple' : 'border-department-blue'} card-hover-effect cursor-pointer`}
                onClick={() => { setSelectedClub(club); setShowClubDetails(true); }}
              >
                <CardHeader className={`bg-gradient-to-r ${club.color === 'purple' ? 'from-department-purple/5 to-department-purple/10' : 'from-department-blue/5 to-department-blue/10'}`}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <CardTitle className={`text-lg sm:text-2xl ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'}`}>{club.name}</CardTitle>
                      <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">{club.description}</CardDescription>
                    </div>
                    <Badge
                        variant="default"
                        className={`w-20 sm:w-24 h-7 sm:h-8 text-xs sm:text-sm flex items-center justify-center whitespace-nowrap ${club.color === 'purple' ? 'bg-department-purple' : 'bg-department-blue'}`}
                    >
                      Est. {club.established}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="space-y-3 sm:space-y-5">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Users className={`h-4 w-4 sm:h-5 sm:w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold text-xs sm:text-base">Club Details</p>
                        <p className="text-xs sm:text-base">Active Members: {club.members}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Award className={`h-4 w-4 sm:h-5 sm:w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold text-xs sm:text-base">Activities</p>
                        <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-base">
                          {club.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Users className={`h-4 w-4 sm:h-5 sm:w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold text-xs sm:text-base">Student Coordinators</p>
                        <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-base">
                          {club.studentCoordinators?.map((coordinator, index) => (
                            <li key={index}>{coordinator}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Club Details Overlay Dialog */}
      <Dialog open={showClubDetails} onOpenChange={setShowClubDetails}>
        <DialogContent className="max-w-xs sm:max-w-4xl sm:max-w-[800px] w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedClub?.name} Events</DialogTitle>
          </DialogHeader>
          {selectedClub && (
            <div>
              <div className="mb-4">
                <span className="font-semibold">Events:</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
                  {getClubEvents(selectedClub.id).map(event => (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      imageSrc={event.imageSrc}
                      host={event.host}
                      onClick={() => handleEventClick(event)}
                    />
                  ))}
                  {getClubEvents(selectedClub.id).length === 0 && (
                    <p className="text-gray-500 italic">No upcoming events for this club.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Event Details Dialog */}
      <Dialog open={showEventDetails} onOpenChange={setShowEventDetails}>
        <DialogContent className="max-w-xs sm:max-w-5xl sm:max-w-[900px] w-full">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedEvent?.title}</DialogTitle>
            <DialogDescription>Event Details</DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2">About this Event</h3>
                    <p className="text-gray-700">{selectedEvent?.description}</p>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-3 text-department-purple" />
                        <div>
                          <p className="font-medium">Date</p>
                          <p className="text-gray-700">{selectedEvent?.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-department-purple" />
                        <div>
                          <p className="font-medium">Time</p>
                          <p className="text-gray-700">{selectedEvent?.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-department-purple" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-gray-700">{selectedEvent?.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <User className="h-5 w-5 mr-3 text-department-purple" />
                        <div>
                          <p className="font-medium">Host</p>
                          <p className="text-gray-700">{selectedEvent?.host}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={selectedEvent?.imageSrc} 
                        alt={selectedEvent?.title} 
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x300?text=Event+Image";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gallery" className="mt-4">
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
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
                  {selectedEvent?.photos.map((photo, index) => (
                    <div key={index} className="overflow-hidden rounded-md aspect-[4/3]">
                      <img 
                        src={photo} 
                        alt={`${selectedEvent.title} thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x300?text=Event+Photo";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Clubs;
