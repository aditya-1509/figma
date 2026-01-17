import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand & Contact */}
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo.png"
                                alt="YouthFluence Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-white font-bold">Youthfluence</span>
                    </div>
                    <div className="flex flex-col text-gray-400 text-xs">
                        <span>+91 9711238245</span>
                        <a href="mailto:nitish@youthfluence.in" className="hover:text-white transition-colors">nitish@youthfluence.in</a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-8 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Career</a>
                </div>

                {/* Socials */}
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
