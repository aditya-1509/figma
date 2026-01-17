'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function Brands() {
    return (
        <section className="py-24 bg-[#030712] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Brands that Trust Us
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden"
                >
                    <div className="relative w-full h-[200px] md:h-[400px]">
                        <Image
                            src="/brands-trusted.png"
                            alt="Brands that trust us"
                            fill
                            className="object-contain" // Using contain to ensure logos are fully visible without cropping
                            priority
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
