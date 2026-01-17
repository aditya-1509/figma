'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight"
                >
                    Ready to collaborate <br />
                    <span className="text-gray-500">the right way?</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {[
                        "Start as College",
                        "Start as Community",
                        "Start as Brand"
                    ].map((label, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            {label}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Inglu. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
