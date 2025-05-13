
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Award, User } from 'lucide-react';
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
  coordinator: string;
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

  const clubs: Club[] = [
    {
      id: 1,
      name: "CodeCraft",
      description: "A programming club focused on competitive coding, algorithm development, and problem-solving.",
      coordinator: "Prof. Ravi Kumar",
      meetingSchedule: "Every Friday, 4:00 PM - 6:00 PM",
      activities: ["Weekly coding challenges", "Hackathons", "Guest lectures from industry experts"],
      color: "purple",
      members: 45,
      established: "2020"
    },
    {
      id: 2,
      name: "CyberShield",
      description: "Cybersecurity enthusiast club exploring network security, ethical hacking, and digital forensics.",
      coordinator: "Dr. Priya Sharma",
      meetingSchedule: "Every Tuesday, 3:00 PM - 5:00 PM",
      activities: ["CTF competitions", "Security workshops", "Security audit projects"],
      color: "blue",
      members: 32,
      established: "2021"
    },
    {
      id: 3,
      name: "WebWizards",
      description: "Web development club focusing on frontend, backend technologies and modern web frameworks.",
      coordinator: "Prof. Anand Verma",
      meetingSchedule: "Every Wednesday, 4:00 PM - 6:00 PM",
      activities: ["Web project collaborations", "UI/UX design sessions", "Web technology workshops"],
      color: "purple",
      members: 38,
      established: "2019"
    },
    {
      id: 4,
      name: "AI Innovators",
      description: "Exploring artificial intelligence, machine learning, and data science applications.",
      coordinator: "Dr. Sneha Patel",
      meetingSchedule: "Every Thursday, 3:30 PM - 5:30 PM",
      activities: ["AI project development", "Research paper discussions", "ML model implementation workshops"],
      color: "blue",
      members: 40,
      established: "2020"
    }
  ];

  const clubEvents: ClubEvent[] = [
    {
      id: 1,
      clubId: 1, // CodeCraft
      title: "Competitive Programming Contest",
      description: "A 4-hour coding competition that will test your algorithm design, problem-solving skills, and efficiency. Prizes for top performers!",
      date: "June 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab A",
      host: "Prof. Ravi Kumar",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      photos: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      ]
    },
    {
      id: 2,
      clubId: 1, // CodeCraft
      title: "Algorithm Deep Dive Workshop",
      description: "Learn advanced algorithmic techniques including dynamic programming, graph algorithms, and optimization strategies.",
      date: "July 5, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Lecture Hall 3",
      host: "Dr. Ankit Verma",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      photos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ]
    },
    {
      id: 3,
      clubId: 2, // CyberShield
      title: "Capture The Flag Competition",
      description: "Test your cybersecurity skills in this challenging CTF competition. Solve security puzzles, crack codes, and find vulnerabilities.",
      date: "June 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab C",
      host: "Dr. Priya Sharma",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      photos: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ]
    },
    {
      id: 4,
      clubId: 3, // WebWizards
      title: "Frontend Framework Seminar",
      description: "Introduction to modern frontend frameworks including React, Vue, and Angular. Learn about component-based architecture and state management.",
      date: "July 12, 2025",
      time: "1:30 PM - 4:30 PM",
      location: "Lecture Hall 2",
      host: "Prof. Anand Verma",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      photos: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ]
    },
    {
      id: 5,
      clubId: 4, // AI Innovators
      title: "Machine Learning Hackathon",
      description: "Apply your ML skills to solve real-world problems in this day-long hackathon. Datasets provided, bring your laptop and creativity!",
      date: "June 29, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Center",
      host: "Dr. Sneha Patel",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      photos: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ]
    },
    {
      id: 6,
      clubId: 4, // AI Innovators
      title: "AI Ethics Panel Discussion",
      description: "Join industry experts and academics for a thought-provoking discussion on the ethical implications of artificial intelligence.",
      date: "July 18, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      host: "Prof. Raj Malhotra",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      photos: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      ]
    }
  ];

  const handleClubClick = (club: Club) => {
    setSelectedClub(selectedClub?.id === club.id ? null : club);
  };

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
            Join our student-led clubs to enhance your skills, network with peers, and participate in exciting tech events.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 max-w-4xl">
          The IT Department hosts several student-led clubs that provide opportunities for 
          hands-on learning, skill development, and networking. These clubs organize various 
          activities, workshops, competitions, and events throughout the academic year.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club) => (
            <div key={club.id}>
              <Card 
                key={club.id} 
                className={`overflow-hidden shadow-lg border-t-4 ${club.color === 'purple' ? 'border-department-purple' : 'border-department-blue'} card-hover-effect cursor-pointer`}
                onClick={() => handleClubClick(club)}
              >
                <CardHeader className={`bg-gradient-to-r ${club.color === 'purple' ? 'from-department-purple/5 to-department-purple/10' : 'from-department-blue/5 to-department-blue/10'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className={`text-2xl ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'}`}>{club.name}</CardTitle>
                      <CardDescription className="mt-2 text-base">{club.description}</CardDescription>
                    </div>
                    <Badge variant={club.color === 'purple' ? 'default' : 'secondary'} className={`${club.color === 'purple' ? 'bg-department-purple' : 'bg-department-blue'}`}>
                      Est. {club.established}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Users className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold">Club Details</p>
                        <p>Faculty Coordinator: {club.coordinator}</p>
                        <p>Active Members: {club.members}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold">Meeting Schedule</p>
                        <p>{club.meetingSchedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className={`h-5 w-5 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'} mt-0.5`} />
                      <div>
                        <p className="font-semibold">Activities</p>
                        <ul className="list-disc pl-5">
                          {club.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {selectedClub?.id === club.id && (
                <div className="mt-6 mb-10">
                  <h3 className={`text-xl font-bold mb-4 ${club.color === 'purple' ? 'text-department-purple' : 'text-department-blue'}`}>
                    {club.name} Events
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {getClubEvents(club.id).map(event => (
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
                  </div>
                  {getClubEvents(club.id).length === 0 && (
                    <p className="text-gray-500 italic">No upcoming events for this club.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={showEventDetails} onOpenChange={setShowEventDetails}>
        <DialogContent className="max-w-5xl sm:max-w-[900px]">
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
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
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
