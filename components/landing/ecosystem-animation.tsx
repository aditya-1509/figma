'use client'

import React from 'react';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';

const EcosystemAnimation: React.FC = () => {
    return (
        <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">

            {/* Background Rings */}
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-800/60 opacity-50 scale-90"></div>
            {/* Middle Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-800/40 scale-75"></div>
            {/* Inner Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-700/30 scale-50"></div>

            {/* Connection Lines (Faint) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-[spin_50s_linear_infinite]">
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="url(#gradient-line)" strokeWidth="1" strokeDasharray="10 10" />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* CENTER NODE */}
            <div className="relative z-20 w-32 h-32 rounded-full bg-[#0B0F1A] border-4 border-[#1E293B] flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                {/* Inner Square Logo */}
                <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                    <span className="text-white font-bold text-3xl font-sans">I</span>
                </div>
                {/* Pulsing ring around center */}
                <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-pulse"></div>
            </div>

            {/* SATELLITE 1: Partner Colleges (Top Right) */}
            <div className="absolute top-[15%] right-[5%] animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}>
                <div className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-3 flex items-center gap-3 shadow-xl hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Partner</span>
                        <span className="text-sm font-bold text-white">Colleges</span>
                    </div>
                </div>
            </div>

            {/* SATELLITE 2: Talent Students (Bottom Left) */}
            <div className="absolute bottom-[20%] left-[0%] animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
                <div className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-3 flex items-center gap-3 shadow-xl hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Talent</span>
                        <span className="text-sm font-bold text-white">Students</span>
                    </div>
                </div>
            </div>

            {/* SATELLITE 3: Sponsor Brands (Bottom Right) */}
            <div className="absolute bottom-[5%] right-[15%] animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}>
                <div className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-3 flex items-center gap-3 shadow-xl hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Sponsor</span>
                        <span className="text-sm font-bold text-white">Brands</span>
                    </div>
                </div>
            </div>

            {/* Connection Beams (Visual only) */}
            {/* Center to Student */}
            <div className="absolute top-1/2 left-1/2 w-[160px] h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent transform -translate-y-1/2 rotate-[145deg] origin-left -z-10"></div>
            {/* Center to Brand */}
            <div className="absolute top-1/2 left-1/2 w-[140px] h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent transform -translate-y-1/2 rotate-[70deg] origin-left -z-10"></div>
            {/* Center to College */}
            <div className="absolute top-1/2 left-1/2 w-[160px] h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent transform -translate-y-1/2 rotate-[-45deg] origin-left -z-10"></div>

        </div>
    );
};

export default EcosystemAnimation;
