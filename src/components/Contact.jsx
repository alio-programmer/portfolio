import React from 'react'
import { motion } from 'framer-motion'
import resumePDF from '../assets/resume.pdf' // adjust path if needed

export default function Contact(){
    return (
        <section id="contact">
            <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold">Get in touch</h2>
                <p className="mt-3 text-slate-300">
                    Email me at <a href="mailto:gauravsinghbisht.scoe.it@gmail.com" className="underline">gauravsinghbisht.scoe.it@gmail.com</a>
                    or call <a className="underline" href="tel:+919510158812">+91-9510158812</a>
                </p>

                <motion.div
                    className="mt-6 inline-grid grid-cols-2 gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {/* Download Resume button */}
                    <a
                        href={resumePDF}
                        download="Gaurav_Singh_Resume.pdf"
                        className="py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Download Resume
                    </a>

                    <a
                        href="https://github.com/alio-programmer"
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 rounded border border-slate-600 hover:bg-slate-800 transition-colors duration-300"
                    >
                        Github
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
