import React from 'react'
import { motion } from 'framer-motion'

const projects = [
    {
        title: 'LogLoader — Spark HDFS Parser',
        desc: 'Developed a Spark application in Java to parse over 11 million unstructured HDFS logs into structured templates, enabling easier analytics and reporting.',
        link: 'https://github.com/alio-programmer/Spark-Log-Loader.git'
    },
    {
        title: 'Data Lakehouse with AWS Glue',
        desc: 'Built an end-to-end ETL pipeline using AWS Glue, S3, and Athena to create a curated data lakehouse architecture. Automated data cataloging and querying.',
        link: 'https://github.com/alio-programmer/Data-Lakehouse-using-AWS-Glue-and-S3.git'
    },
    {
        title: 'Deepfake Detective',
        desc: 'Implemented a GAN-based discriminator model to detect deepfake content, achieving strong accuracy in controlled testing environments.',
        link: 'https://github.com/alio-programmer/Deepfake-Detective-Model-Python.git'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-6">
            <motion.div
                className="max-w-6xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-semibold text-white">Projects</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((p, index) => (
                        <motion.a
                            key={p.title}
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-6 rounded-lg bg-slate-800/40 min-h-[180px] border border-slate-700/50 block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            whileHover={{
                                scale: 1.02,
                                y: -4,
                                boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                delay: index * 0.1
                            }}
                        >
                            <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                            <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                            <p className="mt-4 text-xs text-slate-400">View on GitHub →</p>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
