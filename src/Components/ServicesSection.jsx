import React from "react";
import { FaPassport, FaPlane, FaSuitcaseRolling, FaUmbrellaBeach, FaBuilding, FaMapMarkedAlt } from "react-icons/fa";

const services = [
    {
        title: "Visa Processing",
        description: "We offer hassle-free visa application services for various countries.",
        icon: <FaPassport />,
    },
    {
        title: "Flight Booking",
        description: "Book your domestic and international flights at the best prices.",
        icon: <FaPlane />,
    },
    {
        title: "Tour Packages",
        description: "Explore our customized tour packages to make your trips unforgettable.",
        icon: <FaSuitcaseRolling />,
    },
    {
        title: "Holiday Planning",
        description: "Plan your holidays with our expert travel consultancy.",
        icon: <FaUmbrellaBeach />,
    },
    {
        title: "Corporate Travel",
        description: "Specialized travel management services for businesses and corporates.",
        icon: <FaBuilding />,
    },
    {
        title: "Destination Guidance",
        description: "Get detailed guidance on travel destinations and visa requirements.",
        icon: <FaMapMarkedAlt />,
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container px-6 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-center text-green-700">
                    OUR <span className="text-orange-700">SERVICES</span>
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
                    At Visa Navigator, we provide comprehensive solutions for all your travel and visa needs.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
                        >
                            <div className="mb-4 text-4xl text-blue-500">{service.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
