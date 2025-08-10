import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-80 backdrop-blur-sm border-b border-slate-800"
        >
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-semibold text-lg text-white tracking-wide">
                    Gaurav
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-sm text-gray-300 hover:text-pink-400 transition">About</a>
                    <a href="#projects" className="text-sm text-gray-300 hover:text-pink-400 transition">Projects</a>
                    <a href="#experience" className="text-sm text-gray-300 hover:text-pink-400 transition">Experience</a>
                    <a href="#contact" className="text-sm text-gray-300 hover:text-pink-400 transition">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-pink-400 transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black border-t border-pink-500/20"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-pink-400 transition">About</a>
                            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-pink-400 transition">Projects</a>
                            <a href="#experience" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-pink-400 transition">Experience</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-pink-400 transition">Contact</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
