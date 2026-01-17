'use client'

import { motion } from "framer-motion"
import { Building2, Briefcase, GraduationCap, X, ThumbsUp, ThumbsDown } from "lucide-react"

const roles = [
    {
        id: "colleges",
        title: "For Colleges",
        subtitle: "Partner & Scale",
        icon: Building2,
        features: [
            { label: "Structure", value: "Organized Events" },
            { label: "Reach", value: "Campus Wide" },
            { label: "Funding", value: "Verified Sponsors" }
        ],
        description: "List fests, verify outcomes, and get funded.",
        accent: "bg-sky-500"
    },
    {
        id: "brands",
        title: "For Brands",
        subtitle: "Target & ROI",
        icon: Briefcase,
        features: [
            { label: "Campaigns", value: "Nationwide" },
            { label: "Audience", value: "Gen-Z" },
            { label: "Metrics", value: "Real-time ROI" }
        ],
        description: "Discover campuses, launch campaigns, track ROI.",
        accent: "bg-purple-500"
    },
    {
        id: "students",
        title: "For Students",
        subtitle: "Learn & Earn",
        icon: GraduationCap,
        features: [
            { label: "Join", value: "Top Clubs" },
            { label: " participate", value: "Skill Events" },
            { label: "Rewards", value: "Earn & Redeem" }
        ],
        description: "Join clubs, participate in events, earn rewards.",
        accent: "bg-orange-500"
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
                        Your campus life, summarized daily—stay in sync with the markets, the news, and your money.
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
                            className="group relative w-full aspect-[4/5] bg-[#0b0f1a] rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all shadow-2xl flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950/80 pointer-events-none" />

                            {/* Card Content Container */}
                            <div className="relative z-10 flex flex-col h-full p-6">

                                {/* Top Progress Bars (Story Style) */}
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((bar) => (
                                        <div key={bar} className={`h-1 flex-1 rounded-full ${bar === 4 ? 'bg-white' : 'bg-slate-700/50'}`}></div>
                                    ))}
                                </div>

                                {/* Header with Close Icon */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-12 h-12 rounded-full ${role.accent} bg-opacity-20 flex items-center justify-center`}>
                                        <role.icon className={`w-6 h-6 text-white`} />
                                    </div>
                                    <X className="w-6 h-6 text-slate-500 cursor-pointer hover:text-white transition-colors" />
                                </div>

                                {/* Title Section */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-serif text-white mb-2 leading-tight">
                                        {role.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                                        {role.subtitle}
                                    </p>
                                </div>

                                {/* List Section (Transaction Style) */}
                                <div className="space-y-4 mb-auto">
                                    {role.features.map((feature, i) => (
                                        <div key={i} className="flex justify-between items-center py-3 border-b border-slate-800/60 last:border-0 group-hover:border-slate-700 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full ${role.accent}`}></div>
                                                <span className="text-slate-300 text-sm font-medium">{feature.label}</span>
                                            </div>
                                            <span className="text-white font-semibold text-sm">{feature.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer Text */}
                                <p className="text-xs text-slate-500 mt-6 mb-6 leading-relaxed">
                                    {role.description}
                                </p>

                                {/* Bottom Actions (Pill Buttons) */}
                                <div className="flex gap-3 mt-auto">
                                    <button className="flex-1 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium transition-colors flex items-center justify-center gap-2">
                                        <ThumbsUp className="w-3 h-3" /> More like this
                                    </button>
                                    <button className="flex-1 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs text-slate-400 hover:text-white font-medium transition-colors flex items-center justify-center gap-2">
                                        <ThumbsDown className="w-3 h-3" /> Less like this
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
