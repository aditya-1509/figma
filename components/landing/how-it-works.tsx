'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Search, PenTool, BarChart3 } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Discover verified partners",
        desc: "Browse a network of vetted colleges, communities, and brands waiting to collaborate.",
        icon: Search
    },
    {
        id: 2,
        title: "Build collaboration proposal",
        desc: "Use structured templates to create clear, professional proposals in minutes.",
        icon: PenTool
    },
    {
        id: 3,
        title: "Execute + track outcomes",
        desc: "Manage the entire workflow and see real-time data on your campaign's success.",
        icon: BarChart3
    }
]

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    // Height of the progress line
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section ref={containerRef} id="how-it-works" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        One platform. Three steps. <br />
                        <span className="text-emerald-500">Zero confusion.</span>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Progress Line Background */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

                    {/* Active Progress Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[28px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500 -translate-x-1/2 origin-top"
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Icon Marker */}
                                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-black border-4 border-zinc-900 z-10">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                </div>

                                {/* Content */}
                                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                                    }`}>
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 mb-4">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Empty side for layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
