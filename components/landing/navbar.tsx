'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Users, Building2, GraduationCap } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeRole, setActiveRole] = useState("Student")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20">
                        I
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide">
                        INGLU
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                    <a href="#use-cases" className="hover:text-white transition-colors">Use cases</a>

                    <div className="w-px h-4 bg-white/10" />

                    {/* Role Selector */}
                    <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                        <button
                            onClick={() => setActiveRole("College")}
                            className={cn("px-3 py-1 rounded-full text-xs transition-all", activeRole === "College" ? "bg-white/10 text-white" : "text-gray-400 hover:text-white")}
                        >
                            College
                        </button>
                        <button
                            onClick={() => setActiveRole("Brand")}
                            className={cn("px-3 py-1 rounded-full text-xs transition-all", activeRole === "Brand" ? "bg-white/10 text-white" : "text-gray-400 hover:text-white")}
                        >
                            Brand
                        </button>
                        <button
                            onClick={() => setActiveRole("Student")}
                            className={cn("px-3 py-1 rounded-full text-xs transition-all", activeRole === "Student" ? "bg-white/10 text-white" : "text-gray-400 hover:text-white")}
                        >
                            Student
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                        Register Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 text-gray-300">
                            <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
                            <a href="#how-it-works" className="hover:text-white">How it works</a>
                            <a href="#use-cases" className="hover:text-white">Use cases</a>

                            <div className="flex flex-col gap-2 mt-4">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">I am a:</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 bg-white/5 rounded text-sm">College</button>
                                    <button className="flex-1 py-2 bg-white/5 rounded text-sm">Brand</button>
                                    <button className="flex-1 py-2 bg-white/5 rounded text-sm">Student</button>
                                </div>
                            </div>

                            <button className="mt-4 w-full bg-violet-600 text-white py-3 rounded-lg font-semibold">
                                Register Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
