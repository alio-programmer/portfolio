import React from 'react'
import { motion } from 'framer-motion'
import resumeFile from '../assets/resume.pdf' // adjust path if needed
import portfolioImage from '../assets/portfolio_image.jpg'

export default function Hero() {
    return (
        <section className="pt-20 py-6" id="home">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left content */}
                <div>
                    <motion.h1
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Hi — I'm{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-extrabold">
                            Gaurav Singh Bisht
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-4 text-slate-300 max-w-xl"
                    >
                        I am an aspiring Data Engineer focused on building scalable ETL pipelines, real-time analytics,
                        and cloud-native data solutions. I also build MERN stack based web applications as a hobby.
                    </motion.p>

                    <motion.div
                        className="mt-6 flex gap-4 flex-wrap"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#projects" className="inline-block rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium shadow hover:scale-105 transform transition">
                            See Projects
                        </a>
                        <a href="#contact" className="inline-block rounded-lg border border-slate-700 px-5 py-2 text-sm">
                            Let's talk
                        </a>
                        <a
                            href={resumeFile}
                            download="Gaurav_Singh_Bisht_Resume.pdf"
                            className="inline-block rounded-lg bg-pink-500 px-5 py-2 text-sm font-medium shadow hover:scale-105 transform transition"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right image */}
                <motion.div
                    initial={{ scale: 0.80, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative mx-auto w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-2xl overflow-hidden"
                >
                    <img
                        src={portfolioImage}
                        alt="portfolio_image"
                        className="w-full h-full object-cover scale-120" // zoom in
                    />
                </motion.div>
            </div>
        </section>
    )
}
