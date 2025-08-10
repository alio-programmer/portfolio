import React from 'react'
import { motion } from 'framer-motion'
import resume from '../assets/resume.pdf'

export default function About() {
    const items = [
        { "name": "Java", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { "name": "Python", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { "name": "Scala", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" },
        { "name": "C++", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { "name": "SQL", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" },
        { "name": "Apache Spark", "image":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
        { "name": "Apache Kafka", "image":"https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754825552/png-clipart-kafka-logo-icons-logos-emojis-tech-companies-thumbnail_cig1j9.png" },
        { "name": "Hadoop", "image":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg" },
        { "name": "Snowflake", "image": "https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754822413/idCkdSg0B6_1754822238540_uqe3s0.png" },
        { "name": "Azure", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { "name": "Docker", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { "name": "Git", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { "name": "MongoDB", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { "name": "Databricks", "image": "https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754822743/idF4fnHpaJ_logos_e1rzro.png" }
    ]
    return (
        <section id="about" className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay:0.6, ease: "easeOut" }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-semibold text-white">About</h2>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-black/70 rounded-xl py-6 shadow-lg backdrop-blur-md"
                >
                    <p className="text-slate-300">
                        I'm a recent BE graduate (Savitribai Phule Pune University) passionate about distributed data systems,
                        Spark, Kafka, and building production-grade pipelines. I enjoy architecting data flows, converting raw logs
                        into analytics-ready datasets, and deploying cloud-native data solutions.
                    </p>

                    <div className="mt-6 grid grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {items.map((item, i) => (
                            <motion.div
                                initial={{opacity: 0, y:50}}
                                whileInView={{opacity: 1, y:0, transition:{ duration: 1, ease: "easeOut", delay: 0.06*i }}}
                                viewport={{ once: false }}
                                whileHover={{
                                    scale: 1.03,
                                    borderColor: "rgba(100, 116, 139, 0.4)",
                                    transition: { type: "spring", stiffness: 250, damping: 15 }
                                }}
                                className="rounded-lg bg-slate-800/40 border border-slate-700/50 block"
                            >
                                <InfoCard  item={item.name} imgurl={item.image} id={i} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

function InfoCard({ id, item, imgurl }) {
    return (
            <ul id={id} className="text-lg text-slate-300 space-y-1 p-2 flex flex-col items-center justify-center">
                <img src={imgurl} className="h-10 w-10 object-contain"/>{item}
            </ul>
    )
}
