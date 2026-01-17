'use client'

import { motion } from "framer-motion"
import { Sparkles, Search, Handshake, Rocket, BarChart3, ArrowRight } from "lucide-react"

const steps = [
    { icon: Sparkles, label: "Fest / Event" },
    { icon: Search, label: "Brand Discovery" },
    { icon: Handshake, label: "Collaboration" },
    { icon: Rocket, label: "Execution" },
    { icon: BarChart3, label: "Results" }
]

export function CollaborationFlow() {
    return (
        <section className="py-24 bg-[#030712] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How collaboration happens on INGLU
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From planning to execution, every step is structured, transparent, and verified.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Desktop Flow */}
                    <div className="hidden md:flex justify-between items-center relative">
                        {/* Connecting Line Base */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0 rounded-full" />

                        {/* Animated Progress Line - could animate on scroll but sticky for now */}
                        <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 -translate-y-1/2 z-0 rounded-full opacity-50" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative z-10 flex flex-col items-center gap-4 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300">
                                    <step.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                                    {step.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Flow (Vertical) */}
                    <div className="md:hidden space-y-8 relative">
                        <div className="absolute top-4 bottom-4 left-8 w-1 bg-gradient-to-b from-violet-600 to-cyan-500/20 -translate-x-1/2 z-0" />

                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-6 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-lg shrink-0">
                                    <step.icon className="w-7 h-7 text-gray-200" />
                                </div>
                                <div className="text-lg font-semibold text-white">
                                    {step.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
