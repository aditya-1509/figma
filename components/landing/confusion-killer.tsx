'use client'

import { motion } from "framer-motion"
import { AlertTriangle, MessageSquareOff, FileQuestion } from "lucide-react"

const pains = [
    {
        icon: MessageSquareOff,
        title: "Too many DMs, no process",
        desc: "Endless threads, lost emails, and chaotic communication."
    },
    {
        icon: AlertTriangle,
        title: "No verified partners",
        desc: "Blind outreach to accounts that might not even be real."
    },
    {
        icon: FileQuestion,
        title: "No visibility on outcomes",
        desc: "Did it work? Who knows. Zero data to prove ROI."
    }
]

export function ConfusionKiller() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Opportunities don’t fail. <br />
                        <span className="text-red-500">Clarity does.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Inglu turns chaos into structure — so collaborations feel obvious, not uncertain.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ rotate: [-1, 1, -1, 0] }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors"
                        >
                            <pain.icon className="w-10 h-10 text-red-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                            <p className="text-gray-400">{pain.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
