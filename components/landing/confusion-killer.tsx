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
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Who Are We?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Youthfluence is the gateway for brands to connect with Gen Z and Millennials. We specialize in campus marketing, youth influencer campaigns, and digital growth (SEO, Social Media, User Acquisition).
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
