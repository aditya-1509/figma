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
            title: "Peer-Driven Brand Amplification",
            description: "Authentic promotion through trusted peer networks.",
            icon: Users
        },
        {
            title: "Diverse Youth Influencer Network",
            description: "Access to influencers across various niches and campuses.",
            icon: Building2
        },
        {
            title: "Strategic On-Campus Brand Immersion",
            description: "Deep integration into campus life and events.",
            icon: Calendar
        },
        {
            title: "Viral Social Media & Campus Activation",
            description: "Campaigns designed to go viral both online and offline.",
            icon: Megaphone
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
                            {features[activeTab].map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-3xl overflow-hidden border transition-all duration-300 bg-gradient-to-b from-indigo-900/40 via-purple-900/40 to-slate-900/40 border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-indigo-900/50 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col items-start justify-between aspect-square"
                                >
                                    {/* Glass Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                                    <div className="relative z-10 shrink-0">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 text-white backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
                                            <feature.icon className="w-7 h-7 text-purple-200" />
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                                        <p className="text-indigo-100/70 text-sm leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
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
