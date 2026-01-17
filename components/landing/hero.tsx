'use client'

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, Building2, GraduationCap, Briefcase } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

            {/* Background Gradients/Noise (Keeping background color intact) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 brightness-150 mix-blend-overlay"></div>
                {/* Subtle ambient glows matching the image vibe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Copy (Matches Image) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-xs font-medium text-violet-300 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        THE COLLABORATION ECOSYSTEM
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        One Platform to <br />
                        Connect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Colleges,</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Students</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">& Brands.</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Run college events, brand campaigns, sponsorships, and collaborations — in one ecosystem. Verify partners, track outcomes, and scale impact effortlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 bg-violet-600 text-white rounded-full font-bold text-lg hover:bg-violet-700 transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                            Explore for Colleges
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium text-lg transition-colors flex items-center gap-2">
                            Explore for Brands
                        </button>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer group">
                        <PlayCircle className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                        See how it works
                    </div>
                </motion.div>

                {/* Right: The Node Network Animation (Matches Image) */}
                <div className="relative h-[600px] w-full flex items-center justify-center">

                    {/* Concentric Circles (Orbits) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-[300px] h-[300px] rounded-full border border-violet-500/30"></div>
                        <div className="absolute w-[450px] h-[450px] rounded-full border border-violet-500/20 border-dashed"></div>
                        <div className="absolute w-[600px] h-[600px] rounded-full border border-violet-500/10"></div>
                    </div>

                    {/* Central Hub */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-20 w-24 h-24 rounded-[2rem] bg-violet-600 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.5)]"
                    >
                        <span className="text-4xl font-bold text-white">I</span>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-[2rem] border-2 border-violet-400/50 animate-ping opacity-20"></div>
                    </motion.div>

                    {/* Floating Card: Partner Colleges (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        // Position matching the image: Top Right relative to center
                        className="absolute top-[20%] right-[10%] lg:right-[5%] p-4 rounded-2xl bg-[#0F111A]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 shadow-xl z-20"
                        animate={{
                            y: [0, -10, 0], // Float animation
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">PARTNER</div>
                            <div className="text-sm font-bold text-white">Colleges</div>
                        </div>
                    </motion.div>

                    {/* Floating Card: Talent Students (Bottom Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        // Position: Bottom Left relative to center
                        className="absolute bottom-[25%] left-[5%] lg:left-[0%] p-4 rounded-2xl bg-[#0F111A]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 shadow-xl z-20"
                        animate={{
                            y: [0, 10, 0], // Float animation reverse
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            delay: 1,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-pink-900/50 flex items-center justify-center text-pink-400">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">TALENT</div>
                            <div className="text-sm font-bold text-white">Students</div>
                        </div>
                    </motion.div>

                    {/* Floating Card: Sponsor Brands (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        // Position: Bottom Right relative to center
                        className="absolute bottom-[15%] right-[10%] lg:right-[5%] p-4 rounded-2xl bg-[#0F111A]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 shadow-xl z-20"
                        animate={{
                            y: [0, -8, 0], // Float animation
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4.5,
                            delay: 2,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-teal-900/50 flex items-center justify-center text-teal-400">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">SPONSOR</div>
                            <div className="text-sm font-bold text-white">Brands</div>
                        </div>
                    </motion.div>

                    {/* Connecting Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                        {/* Center to Top Right */}
                        <motion.line
                            x1="50%" y1="50%" x2="80%" y2="25%"
                            stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4"
                        />
                        {/* Center to Bottom Left */}
                        <motion.line
                            x1="50%" y1="50%" x2="20%" y2="70%"
                            stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4"
                        />
                        {/* Center to Bottom Right */}
                        <motion.line
                            x1="50%" y1="50%" x2="80%" y2="80%"
                            stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4"
                        />
                        <defs>
                            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                                <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
                                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

            </div>
        </section>
    )
}
