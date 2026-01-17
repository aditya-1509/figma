// 'use client'

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// // import { Button } from "@/components/ui/button"; // Unused and file doesn't exist
// // IMPORTANT: User provided specific Button component code. I should create it first or use it here.
// // Let's create components/landing/button.tsx or ui/button-custom.tsx to avoid conflict with shadcn button if needed, 
// // OR simply overwrite the existing button if that's preferred, but user code calls it './ui/Button'.
// // I'll stick to 'components/landing/navbar.tsx' but using the internal logic user provided.

// const Navbar: React.FC = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Ecosystem', href: '#' },
//         { name: 'How it works', href: '#' },
//         { name: 'Use cases', href: '#' },
//     ];

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center">
//                     {/* Logo */}
//                     <div className="flex items-center gap-2 cursor-pointer group">
//                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
//                             <span className="text-white font-bold text-xl">I</span>
//                         </div>
//                         <span className="text-2xl font-bold tracking-tight text-white">INGLU</span>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-8 ml-12">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
//                             >
//                                 {link.name}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
//                             </a>
//                         ))}

//                         {/* Toggle Segment */}
//                         <div className="bg-slate-900/50 border border-slate-800 rounded-full p-1 flex items-center">
//                             <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-white cursor-pointer">College</span>
//                             <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white cursor-pointer transition-colors">Brand</span>
//                             <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white cursor-pointer transition-colors">Student</span>
//                         </div>
//                     </div>

//                     {/* CTA */}
//                     <div className="hidden md:block">
//                         <button className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all">Register Now</button>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                             className="text-slate-300 hover:text-white p-2"
//                         >
//                             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 space-y-4">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.name}
//                             href={link.href}
//                             className="block text-base font-medium text-slate-300 hover:text-white py-2"
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                     <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
//                         <div className="flex justify-center space-x-2 bg-slate-900 p-2 rounded-lg">
//                             <span className="text-xs font-medium text-white bg-slate-800 px-3 py-1 rounded">College</span>
//                             <span className="text-xs font-medium text-slate-400 px-3 py-1">Brand</span>
//                             <span className="text-xs font-medium text-slate-400 px-3 py-1">Student</span>
//                         </div>
//                         <button className="w-full py-3 rounded-lg bg-violet-600 text-white font-bold">Register Now</button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// import { Button } from "@/components/ui/button"; // Unused and file doesn't exist
// IMPORTANT: User provided specific Button component code. I should create it first or use it here.
// Let's create components/landing/button.tsx or ui/button-custom.tsx to avoid conflict with shadcn button if needed,
// OR simply overwrite the existing button if that's preferred, but user code calls it './ui/Button'.
// I'll stick to 'components/landing/navbar.tsx' but using the internal logic user provided.

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Why Us', href: '#' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
                            <span className="text-white font-bold text-xl">I</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">YouthFluence</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 ml-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        {/* Toggle Segment */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-full p-1 flex items-center">
                            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-white cursor-pointer">College</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white cursor-pointer transition-colors">Brand</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white cursor-pointer transition-colors">Student</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all">Register Now</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-base font-medium text-slate-300 hover:text-white py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                        <div className="flex justify-center space-x-2 bg-slate-900 p-2 rounded-lg">
                            <span className="text-xs font-medium text-white bg-slate-800 px-3 py-1 rounded">College</span>
                            <span className="text-xs font-medium text-slate-400 px-3 py-1">Brand</span>
                            <span className="text-xs font-medium text-slate-400 px-3 py-1">Student</span>
                        </div>
                        <button className="w-full py-3 rounded-lg bg-violet-600 text-white font-bold">Register Now</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;