'use client'

import { motion } from "framer-motion"
import { ShieldCheck, Check } from "lucide-react"

export function TrustSection() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mb-6 shadow-lg shadow-blue-500/20">
                        <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        A trusted ecosystem — <br />
                        not random outreach.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { label: "Verified Colleges", count: "500+" },
                        { label: "Verified Communities", count: "2,000+" },
                        { label: "Collaborations Executed", count: "15k+" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5"
                        >
                            <div className="text-4xl font-bold text-white mb-2">{stat.count}</div>
                            <div className="text-gray-400 flex items-center justify-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
