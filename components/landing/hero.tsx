'use client'

import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import EcosystemAnimation from './ecosystem-animation';
import { SplineScene } from '@/components/ui/splite';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-black/20">

            {/* Spline Background */}
            <div className="absolute inset-0 z-0">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>

            {/* Overlay to ensure text readability if needed */}
            <div className="absolute inset-0 z-0 bg-slate-950/60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start text-left z-20 order-2 lg:order-1 pt-10 lg:pt-0">

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1] text-balance">
                            One Platform to <br />
                            Connect
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400">
                                Colleges, Students & Brands.
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg text-slate-300 mb-10 max-w-xl font-normal leading-relaxed text-balance">
                            Run college events, brand campaigns, sponsorships, and collaborations — in one ecosystem. Verify partners, track outcomes, and scale impact effortlessly.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-bold transition-all shadow-lg hover:shadow-xl">
                                Explore for Colleges <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-600 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800 text-white font-semibold transition-all">
                                Explore for Brands
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-sm text-slate-400 font-medium cursor-pointer hover:text-indigo-400 transition-colors">
                            <PlayCircle className="w-5 h-5" /> See how it works
                        </div>

                    </div>

                    {/* Right Column: Animation */}
                    <div className="relative z-10 flex justify-center items-center order-1 lg:order-2 h-full min-h-[400px]">
                        {/* Glow effect behind animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <EcosystemAnimation />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
