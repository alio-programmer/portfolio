import React from 'react'
import { motion } from 'framer-motion'
import resumePDF from '../assets/resume.pdf' // adjust path if needed

export default function Contact() {
    return (
        <section id="contact" className="py-16 ">
            <motion.div
                className="max-w-3xl mx-auto text-center px-4"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
            >
                <h2 className="text-3xl font-semibold text-white mb-4">Get in Touch</h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                    Feel free to reach out to me via email or phone. I’m always open to
                    discussing new projects or opportunities.
                </p>
                <p className="text-slate-300 mb-8">
                    <a
                        href="mailto:gauravsinghbisht.scoe.it@gmail.com"
                        className="underline hover:text-indigo-500 transition-colors"
                    >
                        gauravsinghbisht.scoe.it@gmail.com
                    </a>{' '}
                    or call{' '}
                    <a
                        href="tel:+919510158812"
                        className="underline hover:text-indigo-500 transition-colors"
                    >
                        +91-9510158812
                    </a>
                </p>

                <motion.div
                    className="inline-flex gap-6 justify-center"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.3, duration: 0.5}}
                >
                    <a
                        href={resumePDF}
                        download="Gaurav_Singh_Resume.pdf"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    >
                        Download Resume
                    </a>

                    <a
                        href="https://github.com/alio-programmer"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 border border-slate-600 text-slate-300 rounded-md shadow-sm hover:bg-slate-700 hover:border-indigo-600 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    >
                        GitHub
                    </a>
                </motion.div>
                <div className="mt-6 flex justify-center flex-wrap gap-3">
                    <a href="https://github.com/alio-programmer" target="_blank" rel="noreferrer"
                       className="text-sm flex justify-center flex-col items-center text-slate-100 hover:text-slate-400 transition-colors">
                        <img src="https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754825365/github_edeupz.png"
                             className="h-10 w-10 object-contain rounded-full"/>Github
                    </a>
                    <a href="https://www.linkedin.com/in/gaurav-singh-bisht-3421b6241/" target="_blank"
                       rel="noreferrer"
                       className="text-sm flex justify-center flex-col items-center text-slate-100 hover:text-slate-400 transition-colors">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                            className="h-10 w-10 object-contain "/>LinkedIn
                    </a>
                    <a href="mailto:gauravsinghbisht.scoe.it@gmail.com"
                       className="text-sm flex justify-center flex-col items-center text-slate-100 hover:text-slate-400 transition-colors">
                        <img
                            src='https://images.icon-icons.com/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png'
                            className="h-10 w-10 object-contain"/>Email
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
