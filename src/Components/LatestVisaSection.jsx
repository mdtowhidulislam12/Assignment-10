import React from 'react';

const LatestVisaSection = () => {
    const visas = [
        {
            id: 1,
            title: "USA Tourist Visa",
            description: "Get your tourist visa for the USA with hassle-free processing.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            title: "Canada Work Visa",
            description: "Apply for a work visa to Canada and explore career opportunities.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 3,
            title: "Australia Study Visa",
            description: "Secure your study visa for Australia at affordable consultancy rates.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 4,
            title: "UK Business Visa",
            description: "Plan your business trip to the UK with our streamlined visa process.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 5,
            title: "Dubai Tourist Visa",
            description: "Explore Dubai's wonders with our easy and quick tourist visa service.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 6,
            title: "Germany Work Visa",
            description: "Unlock job opportunities in Germany with our expert visa consultation.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 7,
            title: "Japan Study Visa",
            description: "Start your education journey in Japan with our hassle-free study visa.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 8,
            title: "Singapore Tourist Visa",
            description: "Visit Singapore's iconic landmarks with a fast-approved tourist visa.",
            img: "https://via.placeholder.com/100",
        },
        {
            id: 9,
            title: "Malaysia Employment Visa",
            description: "Kickstart your career in Malaysia with our employment visa assistance.",
            img: "https://via.placeholder.com/100",
        },
    ];


    return (

        <div>

            <section className="py-12 bg-gray-50">
                <div className="container px-6 mx-auto">
                    <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Latest Visa Offers</h2>
                    <p className="max-w-xl mx-auto mb-10 text-center text-gray-600">
                        Discover our latest visa options tailored to meet your needs. Apply now to simplify your travel process.
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {visas.map((visa) => (
                            <div
                                key={visa.id}
                                className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-2xl"
                            >
                                <img
                                    src={visa.img}
                                    alt={visa.title}
                                    className="w-20 h-20 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center text-gray-700">
                                    {visa.title}
                                </h3>
                                <p className="mt-2 text-sm text-center text-gray-600">
                                    {visa.description}
                                </p>
                                <button className="block px-4 py-2 mx-auto mt-4 text-white transition rounded-lg bg-gradient-to-r from-orange-950 to-gray-800 hover:bg-blue-600">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
};

export default LatestVisaSection;
