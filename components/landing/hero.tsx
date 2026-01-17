'use client';

import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import EcosystemAnimation from './ecosystem-animation';


const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 lg:pt-32 overflow-hidden bg-black/20">



            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-slate-950/60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col items-start text-left z-20 order-2 lg:order-1 pt-10 lg:pt-0">

                        {/* HERO HEADING */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold tracking-tight text-white mb-4 leading-[1.15] max-w-3xl">
                            Uniting the Future
                            {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                Colleges,
                            </span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
                                Students,
                            </span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                                & Brands
                            </span>
                        </h1>

                        {/* HERO SUBLINE */}
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                            Youthfluence connects brands with Gen Z and Millennials. We craft campus marketing campaigns and leverage youth influencers to drive engagement, brand loyalty, and impactful campaigns.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-bold transition-all shadow-lg hover:shadow-xl">
                                Explore for Colleges
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-600 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800 text-white font-semibold transition-all">
                                Explore for Brands
                            </button>
                        </div>

                        {/* VIDEO CTA (Optional) */}
                        {/* <div className="mt-8 flex items-center gap-3 text-sm text-slate-400 font-medium cursor-pointer hover:text-indigo-400 transition-colors">
                            <PlayCircle className="w-5 h-5" />
                            See how it works
                        </div> */}

                    </div>

                    {/* RIGHT ANIMATION */}
                    <div className="relative z-10 flex justify-center items-center order-1 lg:order-2 h-full min-h-[400px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
                        <EcosystemAnimation />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;