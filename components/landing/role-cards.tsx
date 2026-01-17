'use client'

import { motion } from "framer-motion"
import { Building2, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

const roles = [
    {
        id: "colleges",
        title: "For Colleges",
        subtitle: "STRUCTURE & SPONSORSHIPS",
        icon: Building2,
        description: "List fests, verify outcomes, and get funded.",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "group-hover:border-sky-500/50",
        glow: "group-hover:shadow-sky-500/20",
        iconBg: "bg-sky-500"
    },
    {
        id: "brands",
        title: "For Brands",
        subtitle: "TARGETED REACH",
        icon: Briefcase, // Using Briefcase as closest match to the 'user/person' icon in context of brands
        description: "Discover campuses, launch campaigns, track ROI.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        glow: "group-hover:shadow-purple-500/20",
        iconBg: "bg-purple-500"
    },
    {
        id: "students",
        title: "For Students",
        subtitle: "OPPORTUNITIES & SKILLS",
        icon: GraduationCap,
        description: "Join clubs, participate in events, earn rewards.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/50",
        glow: "group-hover:shadow-orange-500/20",
        iconBg: "bg-orange-500"
    }
]

export function RoleSelection() {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need <br />
                        <span className="text-slate-400">to scale your ecosystem.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether you are a college, a brand, or a student, INGLU provides the right tools to connect and grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            className={`group relative p-8 rounded-3xl border border-slate-800 bg-[#0F172A] hover:bg-[#1E293B] transition-all duration-500 hover:-translate-y-2 ${role.border} hover:shadow-2xl ${role.glow}`}
                        >
                            {/* Icon Box */}
                            <div className={`w-12 h-12 rounded-xl ${role.iconBg} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                <role.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                                <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${role.color} opacity-90`}>
                                    {role.subtitle}
                                </p>
                                <p className="text-slate-400 text-base leading-relaxed mb-10">
                                    {role.description}
                                </p>

                                {/* Bottom Link */}
                                <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center justify-between group/link cursor-pointer">
                                    <span className="text-white font-semibold">Get Started</span>
                                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
