import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white font-bold">I</div>
                    <span className="text-white font-bold">INGLU</span>
                </div>

                <div className="flex gap-8 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>

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
