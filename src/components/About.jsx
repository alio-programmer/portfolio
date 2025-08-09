import React from 'react'
import { motion } from 'framer-motion'
import resume from '../assets/resume.pdf'

export default function About() {
    return (
        <section id="about" className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay:0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-semibold mb-6 text-white">About</h2>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-black/70 rounded-xl p-6 shadow-lg backdrop-blur-md"
                >
                    <p className="text-slate-300">
                        I'm a recent BE graduate (Savitribai Phule Pune University) passionate about distributed data systems,
                        Spark, Kafka, and building production-grade pipelines. I enjoy architecting data flows, converting raw logs
                        into analytics-ready datasets, and deploying cloud-native data solutions.
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InfoCard title="Languages" items={["Java", "Python", "Scala", "SQL"]} />
                        <InfoCard title="Big Data" items={["Apache Spark", "Apache Kafka", "Hadoop", "Snowflake", "Azure"]} />
                        <InfoCard title="Tools" items={["Docker", "Git", "MongoDB", "Databricks"]} />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="https://github.com/alio-programmer" target="_blank" rel="noreferrer"
                           className="text-sm underline text-slate-600 hover:text-slate-400 transition-colors">
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/gaurav-singh-bisht-3421b6241/" target="_blank" rel="noreferrer"
                           className="text-sm underline text-slate-600 hover:text-slate-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="mailto:gauravsinghbisht.scoe.it@gmail.com"
                           className="text-sm underline text-slate-600 hover:text-slate-400 transition-colors">
                            Email
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

function InfoCard({ title, items }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
                scale: 1.03,
                borderColor: "rgba(100, 116, 139, 0.4)",
                transition: { type: "spring", stiffness: 250, damping: 15 }
            }}
            className="p-6 rounded-lg bg-slate-800/40 min-h-[180px] border border-slate-700/50 block"
        >
            <h4 className="font-medium text-white">{title}</h4>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
                {items.map(i => <li key={i}>• {i}</li>)}
            </ul>
        </motion.div>
    )
}
