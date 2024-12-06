import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <div className="font-bold text-green-400 text-9xl">404</div>
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-pink-300 border-4 border-white rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">🍩</div>
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-800">
                Oopsie! Something's missing...
            </h1>
            <p className="max-w-md mt-2 text-gray-600">
                It seems like we donut find what you searched. The page you were
                looking for doesn’t exist, isn’t available, or was loading incorrectly.
            </p>
            <Link
                to="/"
                className="px-4 py-2 mt-6 text-white transition bg-pink-400 rounded-lg shadow hover:bg-pink-500"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default Error;