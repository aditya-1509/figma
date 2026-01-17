'use client'

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"
import { SplineScene } from "@/components/ui/splite"

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* Background Spline - Restored */}
            <div className="absolute inset-0 z-0">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-transparent"></div>
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
                        The Collaboration Ecosystem
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        One Platform to <br />
                        Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Colleges, Students & Brands.</span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Run college events, brand campaigns, sponsorships, and collaborations — in one ecosystem. Verify partners, track outcomes, and scale impact.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Explore for Colleges
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-medium text-lg transition-colors flex items-center gap-2">
                            Explore for Brands
                        </button>
                    </div>

                    <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer group">
                        <PlayCircle className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                        See how it works
                    </div>
                </motion.div>

                {/* Right: Empty space to let the 3D scene shine (or could have the abstract nodes on top if desired, but user asked for "first background") */}
                <div className="hidden lg:block h-full w-full">
                    {/* The 3D scene is in the background covering the whole area, but mainly visible on the right */}
                </div>

            </div>
        </section>
    )
}
