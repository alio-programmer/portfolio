import React from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-pink-500/20"
        >
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <a href="#" className="font-semibold text-lg text-white tracking-wide">Gaurav</a>
                <div className="space-x-6">
                    <a href="#about" className="text-sm text-gray-300 hover:text-pink-400 transition">About</a>
                    <a href="#projects" className="text-sm text-gray-300 hover:text-pink-400 transition">Projects</a>
                    <a href="#experience" className="text-sm text-gray-300 hover:text-pink-400 transition">Experience</a>
                    <a href="#contact" className="text-sm text-gray-300 hover:text-pink-400 transition">Contact</a>
                </div>
            </div>
        </motion.nav>
    )
}
