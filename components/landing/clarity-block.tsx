'use client'

import { motion } from "framer-motion"
import { Building2, Users, GraduationCap, ArrowRight } from "lucide-react"

const cards = [
    {
        role: "For Colleges",
        icon: Building2,
        gain: "Structure & Sponsorships",
        do: "List fests, verify outcomes, and get funded.",
        color: "from-blue-500 to-cyan-500",
        glow: "shadow-cyan-500/20",
        bg: "bg-cyan-950/20",
        border: "border-cyan-500/30"
    },
    {
        role: "For Brands",
        icon: Users,
        gain: "Targeted Reach",
        do: "Discover campuses, launch campaigns, track ROI.",
        color: "from-violet-500 to-fuchsia-500",
        glow: "shadow-fuchsia-500/20",
        bg: "bg-fuchsia-950/20",
        border: "border-fuchsia-500/30"
    },
    {
        role: "For Students",
        icon: GraduationCap,
        gain: "Opportunities & Skills",
        do: "Join clubs, participate in events, earn rewards.",
        color: "from-orange-500 to-amber-500",
        glow: "shadow-amber-500/20",
        bg: "bg-amber-950/20",
        border: "border-amber-500/30"
    }
]

export function ClarityBlock() {
    return (
        <section className="py-16 bg-[#030712] relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl border ${card.border} ${card.bg} backdrop-blur-xl group hover:scale-[1.02] transition-transform duration-300`}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${card.color} blur-xl -z-10`} />

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg ${card.glow}`}>
                                <card.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{card.role}</h3>
                            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{card.gain}</div>

                            <p className="text-gray-300 mb-8 min-h-[48px]">{card.do}</p>

                            <button className="flex items-center text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                                Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
