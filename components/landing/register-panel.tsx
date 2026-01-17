'use client'

import { ArrowRight } from "lucide-react"

export function RegisterPanel() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#030712] to-violet-950/20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden flex flex-col md:flex-row">

                    {/* Register Column */}
                    <div className="flex-1 p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">New here?</h3>
                        <p className="text-gray-400 mb-8">Join the ecosystem and start collaborating.</p>

                        <div className="space-y-4">
                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all flex items-center justify-center gap-2">
                                Register as College <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="w-full py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                Register as Brand <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Login Column */}
                    <div className="flex-1 p-10 md:p-12 hover:bg-white/[0.02] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Already a member?</h3>
                        <p className="text-gray-400 mb-8">Access your dashboard and active campaigns.</p>

                        <div className="space-y-4">
                            <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                                Login as Student <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="w-full py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                Login as Brand / College <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
