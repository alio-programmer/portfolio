import React from 'react'
import { motion } from 'framer-motion'
import resumePDF from '../assets/resume.pdf' // adjust path if needed

export default function Contact() {
    return (
        <section id="contact" className="py-16 ">
            <motion.div
                className="max-w-3xl mx-auto text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
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
            </motion.div>
        </section>
    )
}
