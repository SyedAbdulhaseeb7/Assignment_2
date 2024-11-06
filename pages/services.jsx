// components/Services.js
import React from 'react';
import { FaGamepad, FaTrophy, FaDesktop, FaUsers, FaHeadset } from 'react-icons/fa';

const servicesData = [
  {
    title: "Game Development",
    description: "Crafting immersive gaming experiences with engaging gameplay and stunning graphics.",
    icon: <FaGamepad className="text-6xl mx-auto mb-4 text-white" />,
  },
  {
    title: "eSports Coaching",
    description: "Providing professional coaching to elevate your gaming skills and strategies.",
    icon: <FaTrophy className="text-6xl mx-auto mb-4 text-white" />,
  },
  {
    title: "movie Streaming",
    description: "Setting up and optimizing your game streaming channel for maximum audience engagement.",
    icon: <FaDesktop className="text-6xl mx-auto mb-4 text-white" />,
  },
  {
    title: "Community Building",
    description: "Creating vibrant gaming communities that foster collaboration and friendship.",
    icon: <FaUsers className="text-6xl mx-auto mb-4 text-white" />,
  },
  {
    title: "Virtual Reality Experiences",
    description: "Developing captivating VR games and simulations that transport players into new worlds.",
    icon: <FaHeadset className="text-6xl mx-auto mb-4 text-white" />,
  },
];

const Services = () => {
  return (
    <div className="bg-transparent py-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className=" backdrop-blur-sm bg-opacity-50  shadow-lg rounded-lg p-6 transition transform hover:scale-105"
            >
              {service.icon}
              <h2 className="text-2xl text-slate-500 font-semibold text-center mb-2">{service.title}</h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
