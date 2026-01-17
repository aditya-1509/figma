'use client'

import { motion } from "framer-motion"
import { Building2, Briefcase, GraduationCap, X, ThumbsUp, ThumbsDown, ArrowUpRight } from "lucide-react"

const roles = [
    {
        id: "colleges",
        title: "Partner Colleges",
        subtitle: "Verification Pending",
        icon: Building2,
        features: [
            { label: "Structure", sub: "Organized Events", value: "Verified" },
            { label: "Reach", sub: "Campus Wide", value: "12k+" },
            { label: "Funding", sub: "Sponsors aligned", value: "$45k" }
        ],
        description: "List fests, verify outcomes, and get funded. This month's projected reach is pacing 18% above target.",
        accent: "text-blue-400"
    },
    {
        id: "brands",
        title: "Brand Partners",
        subtitle: "Campaign Active",
        icon: Briefcase,
        features: [
            { label: "Campaigns", sub: "Nationwide", value: "Active" },
            { label: "Audience", sub: "Gen-Z Reach", value: "850k" },
            { label: "ROI", sub: "Real-time stats", value: "+240%" }
        ],
        description: "Discover campuses, launch campaigns, track ROI. Engagement rates are looking strong across all activate regions.",
        accent: "text-purple-400"
    },
    {
        id: "students",
        title: "Student Talent",
        subtitle: "Opportunities Open",
        icon: GraduationCap,
        features: [
            { label: "Join", sub: "Top Clubs", value: "Open" },
            { label: "Events", sub: "Skill building", value: "5 New" },
            { label: "Rewards", sub: "Earn & Redeem", value: "Pts" }
        ],
        description: "Join clubs, participate in events, earn rewards. You have 3 new opportunities matching your profile this week.",
        accent: "text-orange-400"
    }
]

export function RoleSelection() {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Unlock your potential.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Your ecosystem, summarized daily—stay in sync with colleges, brands, and opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            className="group relative w-full aspect-[4/5] bg-[#0A0A0A] rounded-[32px] overflow-hidden border border-white/10 hover:border-white/20 transition-all shadow-2xl flex flex-col"
                        >
                            {/* Card Content Container */}
                            <div className="relative z-10 flex flex-col h-full p-8 font-sans">

                                {/* Top Progress Bars */}
                                <div className="flex gap-1.5 mb-8">
                                    {[1, 2, 3, 4, 5].map((bar) => (
                                        <div key={bar} className={`h-1 flex-1 rounded-full ${bar === 3 ? 'bg-white' : 'bg-white/20'}`}></div>
                                    ))}
                                </div>

                                {/* Close Icon Row */}
                                <div className="flex justify-end mb-4">
                                    <X className="w-5 h-5 text-white/60 cursor-pointer hover:text-white transition-colors" />
                                </div>

                                {/* Title Section (Serif Big Text) */}
                                <div className="mb-8">
                                    <h3 className="text-4xl font-serif text-white mb-3 leading-[1.1] tracking-tight">
                                        {role.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>

                                {/* 'UPCOMING TRANSACTIONS' style header */}
                                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                                        KEY METRICS
                                    </span>
                                </div>

                                {/* List Section */}
                                <div className="space-y-6 mb-auto">
                                    {role.features.map((feature, i) => (
                                        <div key={i} className="flex justify-between items-start group/item">
                                            <div className="flex gap-4">
                                                {/* Small Icon Placeholder */}
                                                <div className="mt-1">
                                                    <role.icon className="w-4 h-4 text-white/70" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-medium text-sm">{feature.label}</span>
                                                    <span className="text-white/40 text-xs">{feature.sub}</span>
                                                </div>
                                            </div>
                                            <span className="text-white font-medium text-sm tabular-nums">{feature.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Actions (Pill Buttons) */}
                                <div className="flex gap-3 mt-8">
                                    <button className="flex-1 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[13px] text-white font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-md">
                                        <ThumbsUp className="w-4 h-4" /> More like this
                                    </button>
                                    <button className="flex-1 py-3 rounded-full bg-transparent border border-white/10 hover:bg-white/5 text-[13px] text-white/60 hover:text-white font-medium transition-colors flex items-center justify-center gap-2">
                                        <ThumbsDown className="w-4 h-4" /> Less like this
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
