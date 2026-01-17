'use client'

import { motion } from "framer-motion"
import { School, Users, Briefcase } from "lucide-react"

const roles = [
    {
        id: "colleges",
        title: "Partner as a College",
        icon: School,
        description: "Manage campus partnerships and student opportunities.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "communities",
        title: "Join as Community",
        icon: Users,
        description: "Grow your student club or community with real brands.",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "brands",
        title: "Launch a Campaign",
        icon: Briefcase,
        description: "Connect with the most active student audiences.",
        color: "from-orange-500 to-red-500"
    }
]

export function RoleSelection() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        Choose your role. We’ll guide you.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 bg-gradient-to-b from-indigo-900/40 via-purple-900/40 to-slate-900/40 border-white/10 backdrop-blur-xl hover:border-purple-500/50 hover:bg-indigo-900/50 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {/* Glass Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg bg-white/20 text-white backdrop-blur-md border border-white/20">
                                    <role.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                                <p className="text-indigo-100/90 group-hover:text-white transition-colors">
                                    {role.description}
                                </p>

                                <div className="mt-8 flex items-center text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                                    Get started <span className="ml-2">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
