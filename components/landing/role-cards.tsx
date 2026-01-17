'use client'

import { motion } from "framer-motion"
import { Users, GraduationCap, Share2, Zap } from "lucide-react"

const features = [
    {
        title: "Peer-Driven Brand Amplification",
        description: "75,000+ ambassadors across India.",
        icon: Users
    },
    {
        title: "Unmatched Influencer Network",
        description: "10,000+ creators across fashion, tech, and lifestyle.",
        icon: Share2
    },
    {
        title: "Strategic On-Campus Immersion",
        description: "Presence in 5,000+ colleges.",
        icon: GraduationCap
    },
    {
        title: "Viral Activation",
        description: "Hybrid on-ground + digital approach on Instagram, YouTube, and Twitter.",
        icon: Zap
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
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
