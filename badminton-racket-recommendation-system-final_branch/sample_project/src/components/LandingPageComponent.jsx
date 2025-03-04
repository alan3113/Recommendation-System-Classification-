import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/main');
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen w-full text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../src/assets/Untitleddesign.jpg')" }}
        >
            <header className="container mx-auto px-4 py-12 md:py-24 bg-black/40 rounded-lg">
                <div className="max-w-3xl mx-auto space-y-6 text-left">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Discover Your Perfect Picks</h1>
                    <p className="text-xl text-gray-200">
                        Get personalized recommendations tailored to your preferences. Find your ideal products effortlessly.
                    </p>
                    <button
                        onClick={navigateToMain}
                        className="inline-flex items-center justify-center rounded-md bg-[#805AD5] px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-[#6B46C1] focus:outline-none focus:ring-2 focus:ring-[#4299E1] focus:ring-offset-2"
                    >
                        Get Started
                    </button>
                </div>
            </header>
        </div>
    );
};

export default LandingPage;
