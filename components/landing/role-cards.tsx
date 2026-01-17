'use client'

import { motion } from "framer-motion"
import { Users, Building2, GraduationCap, Megaphone } from "lucide-react"

const features = [
    {
        title: "Peer-Driven Brand Amplification",
        description: "Authentic promotion through trusted peer networks.",
        icon: Users,
        theme: {
            border: "border-cyan-500/30",
            glow: "shadow-cyan-500/20",
            iconBg: "bg-cyan-500",
            iconText: "text-white",
            title: "text-white"
        }
    },
    {
        title: "Diverse Youth Influencer Network",
        description: "Access to influencers across various niches and campuses.",
        icon: Building2,
        theme: {
            border: "border-purple-500/30",
            glow: "shadow-purple-500/20",
            iconBg: "bg-purple-500",
            iconText: "text-white",
            title: "text-white"
        }
    },
    {
        title: "Strategic On-Campus Brand Immersion",
        description: "Deep integration into campus life and events.",
        icon: GraduationCap,
        theme: {
            border: "border-orange-500/30",
            glow: "shadow-orange-500/20",
            iconBg: "bg-orange-500",
            iconText: "text-white",
            title: "text-white"
        }
    },
    {
        title: "Viral Social Media & Campus Activation",
        description: "Campaigns designed to go viral both online and offline.",
        icon: Megaphone,
        theme: {
            border: "border-emerald-500/30",
            glow: "shadow-emerald-500/20",
            iconBg: "bg-emerald-500",
            iconText: "text-white",
            title: "text-white"
        }
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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why Youthfluence?
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`group relative p-6 rounded-3xl overflow-hidden border transition-all duration-300 bg-[#0B0F17] hover:bg-[#111620] ${feature.theme.border} hover:border-opacity-100 hover:shadow-xl ${feature.theme.glow} flex flex-col items-start justify-between aspect-square cursor-pointer`}
                            >
                                <div className="relative z-10 shrink-0">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${feature.theme.iconBg} transition-transform duration-500 group-hover:scale-110`}>
                                        <feature.icon className={`w-7 h-7 ${feature.theme.iconText}`} />
                                    </div>
                                </div>

                                <div className="relative z-10 w-full">
                                    <h3 className={`text-xl font-bold mb-3 leading-tight ${feature.theme.title}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
