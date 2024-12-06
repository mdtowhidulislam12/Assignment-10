import React from 'react';

const AboutUs = () => {
    return (
        <section className="px-4 py-16 bg-gray-100 md:px-8 lg:px-16" id="about">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black">About Us</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Welcome to <span className="font-semibold text-blue-500">BD Embassy</span>, your one-stop platform for hassle-free visa processing, 
                    expert guidance, and seamless travel solutions. Our mission is to make your journey smooth and stress-free.
                </p>
            </div>

            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Our Mission</h3>
                    <p className="mt-2 text-gray-600">
                        To provide reliable and accessible visa services, helping individuals and families achieve their travel dreams effortlessly.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Why Choose Us?</h3>
                    <p className="mt-2 text-gray-600">
                        Our team of experts ensures every visa application is handled with precision, offering personalized assistance every step of the way.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Our Vision</h3>
                    <p className="mt-2 text-gray-600">
                        To be the global leader in visa services, empowering travelers worldwide with simplified and innovative solutions.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Our Values</h3>
                    <p className="mt-2 text-gray-600">
                        Integrity, transparency, and customer satisfaction are at the core of everything we do.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">Expert Team</h3>
                    <p className="mt-2 text-gray-600">
                        Our experienced consultants and customer support team ensure that your visa needs are met with expertise and care.
                    </p>
                </div>

                {/* Card 6 */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-black">24/7 Support</h3>
                    <p className="mt-2 text-gray-600">
                        We are here for you around the clock, ensuring a smooth experience from start to finish.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
