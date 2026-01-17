'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Calendar, Users, Briefcase, CheckCircle, BarChart3, Megaphone, Target } from "lucide-react"

const features = {
    colleges: [
        {
            title: "Register & Verify",
            description: "Get your official verified campus badge.",
            icon: CheckCircle
        },
        {
            title: "List Fests & Events",
            description: "Showcase your calendar to premium brands.",
            icon: Calendar
        },
        {
            title: "Sponsorship Matchmaking",
            description: "Auto-matched brands for your demographics.",
            icon: Users
        },
        {
            title: "Execution Support",
            description: "Tools to manage teams, passes, and logistics.",
            icon: Briefcase
        }
    ],
    brands: [
        {
            title: "Campaign Launchpad",
            description: "Deploy nationwide campaigns in minutes.",
            icon: Megaphone
        },
        {
            title: "Direct Student Access",
            description: "Engage with verified student communities.",
            icon: Users
        },
        {
            title: "Real-time Analytics",
            description: "Track impressions and ROI live.",
            icon: BarChart3
        },
        {
            title: "Hyper-Targeting",
            description: "Filter by region, interest, or demographic.",
            icon: Target
        }
    ]
}

export function RoleSelection() {
    const [activeTab, setActiveTab] = useState<'colleges' | 'brands'>('colleges')

    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
                        <div className="flex relative">
                            {/* Animated Background for Active Tab */}
                            <motion.div
                                layoutId="activeTab"
                                className={`absolute inset-0 bg-purple-600 rounded-full shadow-lg ${activeTab === 'colleges' ? 'w-1/2 left-0' : 'w-1/2 left-1/2'}`}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            <button
                                onClick={() => setActiveTab('colleges')}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'colleges' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                For Colleges
                            </button>
                            <button
                                onClick={() => setActiveTab('brands')}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'brands' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                For Brands
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {features[activeTab].map((feature, index) => {
                                // Define specific colors for each index to match the reference image
                                const colors = [
                                    { border: "border-cyan-500/30", glow: "shadow-cyan-500/20", iconBg: "bg-cyan-500", iconText: "text-white", title: "text-white" },
                                    { border: "border-purple-500/30", glow: "shadow-purple-500/20", iconBg: "bg-purple-500", iconText: "text-white", title: "text-white" },
                                    { border: "border-orange-500/30", glow: "shadow-orange-500/20", iconBg: "bg-orange-500", iconText: "text-white", title: "text-white" },
                                    { border: "border-emerald-500/30", glow: "shadow-emerald-500/20", iconBg: "bg-emerald-500", iconText: "text-white", title: "text-white" },
                                ];
                                const theme = colors[index % colors.length];

                                return (
                                    <div
                                        key={index}
                                        className={`group relative p-6 rounded-3xl overflow-hidden border transition-all duration-300 bg-[#0B0F17] hover:bg-[#111620] ${theme.border} hover:border-opacity-100 hover:shadow-xl ${theme.glow} flex flex-col items-start justify-between aspect-square`}
                                    >
                                        <div className="relative z-10 shrink-0">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${theme.iconBg} transition-transform duration-500 group-hover:scale-110`}>
                                                <feature.icon className={`w-7 h-7 ${theme.iconText}`} />
                                            </div>
                                        </div>

                                        <div className="relative z-10 w-full">
                                            <h3 className={`text-xl font-bold mb-3 leading-tight ${theme.title}`}>{feature.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
