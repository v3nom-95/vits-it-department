
import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageSrc?: string;
}

const EventCard = ({ title, description, date, time, location, imageSrc }: EventCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md mb-6 bg-white">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x200?text=Event+Image";
            }}
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-sm">
          <p className="flex items-start">
            <span className="font-semibold w-20">Date:</span>
            <span>{date}</span>
          </p>
          <p className="flex items-start">
            <span className="font-semibold w-20">Time:</span>
            <span>{time}</span>
          </p>
          <p className="flex items-start">
            <span className="font-semibold w-20">Location:</span>
            <span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
