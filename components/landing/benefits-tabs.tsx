'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Building2, Users } from "lucide-react"

const benefits = {
    colleges: [
        { title: "Register & Verify", desc: "Get your official verified campus badge." },
        { title: "List Fests & Events", desc: "Showcase your calendar to premium brands." },
        { title: "Sponsorship Matchmaking", desc: "Auto-matched brands for your demographics." },
        { title: "Execution Support", desc: "Tools to manage teams, passes, and logistics." }
    ],
    brands: [
        { title: "Access Targeted Campuses", desc: "Filter by tier, location, and student count." },
        { title: "Audience Discovery", desc: "Reach tech, cultural, or management students." },
        { title: "Campaign Planning", desc: "Launch product sampling, hiring, or awareness." },
        { title: "Scale Execution", desc: "Track ROI across 50+ campuses simultaneously." }
    ]
}

export function BenefitsTabs() {
    const [activeTab, setActiveTab] = useState<"colleges" | "brands">("colleges")

    return (
        <section className="py-24 bg-[#030712]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        What’s in it for you?
                    </h2>

                    <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
                        <button
                            onClick={() => setActiveTab("colleges")}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === "colleges"
                                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            For Colleges
                        </button>
                        <button
                            onClick={() => setActiveTab("brands")}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === "brands"
                                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            For Brands
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {benefits[activeTab].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all flex items-start gap-4"
                                >
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'colleges' ? 'bg-violet-500/20 text-violet-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                                        {activeTab === 'colleges' ? <Building2 className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
