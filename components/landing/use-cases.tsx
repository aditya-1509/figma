'use client'

import { motion } from "framer-motion"
import { Calendar, Users, Megaphone, Laptop } from "lucide-react"

const cases = [
    { icon: Users, title: "Youth Influencer Marketing", desc: "Using nano, micro, and macro influencers to drive cultural conversation." },
    { icon: Calendar, title: "Campus Marketing", desc: "Electrifying on-campus events and trendsetting collegiate strategies." },
    { icon: Laptop, title: "Digital Marketing", desc: "Social Media handling, UGC, SEO, and Brand Image Enhancement." },
]

export function UseCases() {
    return (
        <section id="use-cases" className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {cases.map((item, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-black border border-white/10 hover:border-violet-500/50 transition-colors">
                            <item.icon className="w-8 h-8 text-gray-500 group-hover:text-violet-400 mb-4 transition-colors" />
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
