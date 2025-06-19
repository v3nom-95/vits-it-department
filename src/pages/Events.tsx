// pages/EventsPage.tsx

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

interface EventItem {
    title: string;
    date: string;
    type: string;
    participants: string;
    organisedby: string; 
}

interface EventItem2 {
    title: string;
    date: string;
    description: string;
    images: string[]; // support multiple images
}

interface EventsData {
    upcoming: EventItem[];
    past: EventItem2[];
}

const events: EventsData = {
    upcoming: [
        {
            title: 'Essentials of Data Science with R',
            date: '2nd & 3rd July 2025',
            type: '2 - Day Workshop',
            participants: 'III Year Students',
            organisedby: 'TASK',
        },
        {
            title: 'Mastering Academic Writing: A Comprehensive Guide to LaTeX',
            date: '18th & 19th July 2025',
            type: '2-Day Hands on Workshop',
            participants:'IV Year Students',
            organisedby: 'In House Faculty (M S B Kasyapa)',
        },
         {
            title: 'Programming Essentials in Python & Django',
            date: '28th July to 1st August, 2025',
            type: '5 - Day Workshop',
            participants: 'II Year Students',
            organisedby: 'TASK',
        },
        {
            title: 'Zero to Live: Website Creation and Deployment',
            date: '28th & 29th July 2025',
            type: '2- Day Hands on Workshop',
            participants: 'III Year Students',
            organisedby: 'In House Students',
        },
        {
            title: 'Cloud Computing	',
            date: '4th August to 6th August, 2025',
            type: '3 - Day Workshop',
            participants: 'IV Year Students',
            organisedby: 'TASK',
        },
         {
            title: 'Zero to Live: Website Creation and Deployment',
            date: '11th & 13th August 2025',
            type: '3- Day Hands on Workshop',
            participants: 'III Year Students',
            organisedby: 'In House Students',
        },
    ],
    past: [
        
        {
            title: 'Thank You Gurus',
            date: 'June 19, 2025', 
            description: 'Thank You Gurus is a sincere tribute from students to our beloved teachers.',
            images: ['/events/tg1.jpeg', '/events/tg2.jpeg','/events/tg3.jpeg','/events/tg4.jpeg','/events/tg5.jpeg'],
        },
        {
            title: 'Farewell for 2021 - 2025 batch',
            date: 'June 14, 2025', // Note: Corrected to current year based on prompt context
            description: 'A heartwarming farewell for the graduating 2021 batch, celebrating their journey and achievements.',
            images: ['/events/Farewell1.jpeg', '/events/Farewell2.jpeg','/events/Farewell3.jpeg'],
        },
        {
            title: 'Database Programming With SQL',
            date: 'April 15, 2025',
            description: '3 Days Work shop on SQL Programming in association TASK for II Year Students.',
            images: ['/events/dbms1.jpeg', '/events/dbms2.jpeg', '/events/dbms3.jpeg'],
        },
        {
            title: 'Department Day',
            date: 'November 30, 2024',
            description: 'A vibrant celebration of departmental camaraderie, achievements, and collective spirit.',
            images: ['/events/DepartmentDay1.jpeg', '/events/DepartmentDay2.jpeg', '/events/DepartmentDay3.jpeg', '/events/DepartmentDay4.jpeg', '/events/DepartmentDay5.jpeg', '/events/DepartmentDay6.jpeg'],
        },
    ],
};

const UpcomingEventCard: React.FC<{ event: EventItem }> = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-department-purple mb-2">{event.title}</h3>
        <p className="text-md text-gray-700">
            <span className="text-department-purple font-semibold">Event : </span>{event.type}
        </p>
        <p className="text-sm text-gray-600 mb-1">
            <span className="text-department-purple font-semibold">Date : </span>{event.date}
        </p>
        <p className="text-sm text-gray-600 mb-1">
            <span className="text-department-purple font-semibold">Participants : </span>{event.participants}
        </p>
        <p className="text-md text-gray-700">
            <span className="text-department-purple font-semibold">Organised By </span>{event.organisedby}
        </p>
    </div>
);

// New interface for the modal state
interface ModalState {
    eventTitle: string;
    images: string[];
    currentIndex: number;
}

const PastEventCard: React.FC<{ event: EventItem2; onSelectEvent: (event: EventItem2) => void }> = ({ event, onSelectEvent }) => (
    <div
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform group"
        onClick={() => onSelectEvent(event)}
    >
        {event.images.length > 0 ? (
            <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
        ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Available
            </div>
        )}
        <div className="p-4">
            <h3 className="text-xl font-bold text-department-purple mb-1 group-hover:text-department-blue transition-colors duration-300">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    const [modalState, setModalState] = useState<ModalState | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (modalState && modalState.images.length > 1) {
            timer = setInterval(() => {
                setModalState(prevState => {
                    if (prevState) {
                        const nextIndex = (prevState.currentIndex + 1) % prevState.images.length;
                        return { ...prevState, currentIndex: nextIndex };
                    }
                    return null;
                });
            }, 3000); // Change every 3 seconds for a smoother slideshow
        }
        return () => clearInterval(timer);
    }, [modalState]);

    const handleSelectEvent = (event: EventItem2) => {
        if (event.images.length > 0) {
            setModalState({
                eventTitle: event.title,
                images: event.images,
                currentIndex: 0,
            });
        }
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!modalState) return;

        let newIndex = modalState.currentIndex;
        if (direction === 'next') {
            newIndex = (modalState.currentIndex + 1) % modalState.images.length;
        } else {
            newIndex = (modalState.currentIndex - 1 + modalState.images.length) % modalState.images.length;
        }
        setModalState(prevState => prevState ? { ...prevState, currentIndex: newIndex } : null);
    };

    return (
        <Layout>
            <section className="py-12 bg-gradient-to-r from-department-purple/10 to-department-blue/10 min-h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-extrabold text-center text-department-purple mb-12">
                        Department Events & Highlights
                    </h1>

                    {/* Upcoming Events */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-department-blue mb-8 border-b-2 pb-2 border-department-blue/50">
                            Upcoming Events
                        </h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {events.upcoming.length > 0 ? (
                                events.upcoming.map((event, idx) => (
                                    <UpcomingEventCard key={`upcoming-${idx}`} event={event} />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-600 text-lg">No upcoming events at the moment. Check back soon!</p>
                            )}
                        </div>
                    </div>

                    {/* Past Events */}
                    <div>
                        <h2 className="text-3xl font-semibold text-department-blue mb-8 border-b-2 pb-2 border-department-blue/50">
                            Recent Events Snapshots
                        </h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {events.past.length > 0 ? (
                                events.past.map((event, idx) => (
                                    <PastEventCard
                                        key={`past-${idx}`}
                                        event={event}
                                        onSelectEvent={handleSelectEvent}
                                    />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-600 text-lg">No past events to display.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Carousel Modal */}
            {modalState && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto p-6 md:p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setModalState(null)}
                            className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-2 text-sm font-bold opacity-90 hover:opacity-100 transition-opacity duration-200 z-50 shadow-md"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <h3 className="text-2xl font-bold text-department-purple mb-4 text-center">
                            {modalState.eventTitle}
                        </h3>

                        <div className="relative">
                            <img
                                src={modalState.images[modalState.currentIndex]}
                                alt={`${modalState.eventTitle} - Slide ${modalState.currentIndex + 1}`}
                                className="w-full max-h-[500px] object-contain rounded-lg border border-gray-200 shadow-inner"
                            />

                            {modalState.images.length > 1 && (
                                <>
                                    {/* Previous Button */}
                                    <button
                                        onClick={() => navigateImage('prev')}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200"
                                        aria-label="Previous image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    {/* Next Button */}
                                    <button
                                        onClick={() => navigateImage('next')}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200"
                                        aria-label="Next image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    {/* Image Counter */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">
                                        {modalState.currentIndex + 1} / {modalState.images.length}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default EventsPage;