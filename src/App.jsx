import React from 'react'
import {motion} from "framer-motion";
import Nav from './components/Nav'
import Hero from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App(){
    return (
        <div className="min-h-screen bg-black text-slate-100 font-inter">
            <Nav />
            <main className="container mx-auto px-6 py-12 space-y-20">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <footer className="text-center py-6 text-sm text-slate-400">
                © {new Date().getFullYear()} Gaurav Singh Bisht — Built with ❤️
            </footer>
        </div>
    )
}
