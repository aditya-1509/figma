'use client'

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, Building2, GraduationCap, Briefcase } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

            {/* Background Gradients/Noise */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 brightness-150 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Copy */}
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

                {/* Right: The Node Network Animation */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">

                    {/* Concentric Circles (Orbits) - Dashed & Thin */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Inner Circle */}
                        <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
                        {/* Middle Circle */}
                        <div className="absolute w-[440px] h-[440px] rounded-full border border-white/10 border-dashed opacity-50"></div>
                        {/* Outer Circle */}
                        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/5"></div>
                    </div>

                    {/* Central Hub */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-20 w-28 h-28 bg-[#1A103C] rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(109,40,217,0.4)] border border-violet-500/30"
                    >
                        {/* Inner glowing square */}
                        <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center shadow-inner shadow-white/20">
                            <span className="text-3xl font-bold text-white">I</span>
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-[2rem] border border-violet-500/20 animate-ping opacity-20"></div>
                    </motion.div>

                    {/* Connecting Lines (Subtle) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <line x1="50%" y1="50%" x2="78%" y2="28%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="22%" y2="72%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="78%" y2="78%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </svg>

                    {/* Floating Card: Partner Colleges (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute top-[20%] right-[0%] md:right-[5%] p-3 pr-6 rounded-2xl bg-[#0F121C] border border-blue-900/30 flex items-center gap-4 shadow-2xl shadow-black/50 z-20"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-950/50 flex items-center justify-center border border-blue-500/20">
                            <Building2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-blue-300/70 tracking-wider uppercase">PARTNER</span>
                            <span className="text-base font-bold text-white">Colleges</span>
                        </div>
                    </motion.div>

                    {/* Floating Card: Talent Students (Bottom Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute bottom-[20%] left-[0%] md:left-[5%] p-3 pr-6 rounded-2xl bg-[#0F121C] border border-pink-900/30 flex items-center gap-4 shadow-2xl shadow-black/50 z-20"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-pink-950/50 flex items-center justify-center border border-pink-500/20">
                            <GraduationCap className="w-6 h-6 text-pink-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-pink-300/70 tracking-wider uppercase">TALENT</span>
                            <span className="text-base font-bold text-white">Students</span>
                        </div>
                    </motion.div>

                    {/* Floating Card: Sponsor Brands (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute bottom-[15%] right-[0%] md:right-[5%] p-3 pr-6 rounded-2xl bg-[#0F121C] border border-emerald-900/30 flex items-center gap-4 shadow-2xl shadow-black/50 z-20"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-emerald-950/50 flex items-center justify-center border border-emerald-500/20">
                            <Briefcase className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-emerald-300/70 tracking-wider uppercase">SPONSOR</span>
                            <span className="text-base font-bold text-white">Brands</span>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}
