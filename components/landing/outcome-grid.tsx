'use client'

import { motion } from "framer-motion"
import { Calendar, Megaphone, GraduationCap, Mic2, Rocket, HeartHandshake } from "lucide-react"

const items = [
    { name: "Events", icon: Calendar, color: "bg-blue-500" },
    { name: "Sponsorship", icon: HeartHandshake, color: "bg-pink-500" },
    { name: "Internships", icon: GraduationCap, color: "bg-purple-500" },
    { name: "Ambassadors", icon: Megaphone, color: "bg-orange-500" },
    { name: "Workshops", icon: Mic2, color: "bg-cyan-500" },
    { name: "Growth campaigns", icon: Rocket, color: "bg-emerald-500" },
]

export function OutcomeGrid() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Collaboration types — <br />
                        <span className="text-white/50">without complexity.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className={`w-12 h-12 rounded-full ${item.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-6 h-6 text-white`} />
                            </div>
                            <h3 className="text-lg font-semibold text-white/90 group-hover:text-white">{item.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
