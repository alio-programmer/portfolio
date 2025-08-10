import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        role: 'Big Data Intern, Accenture',
        period: 'Feb 2025 – June 2025',
        details: 'Collaborated on integrating supply chain data between SAP and Kinaxis platforms. Designed and documented ingestion flows, mapped pipeline architectures, and optimized ETL jobs to improve performance. Conducted data quality checks to ensure consistency across large datasets.',
        logo:'https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754823024/idJFQz_xqw_1754823016597_g6ni9t.png'
    },
    {
        role: 'Backend Intern (Node.js), CNear (previously YTS-YoursThatSenior)',
        period: 'Dec 2023 – Mar 2024',
        details: 'Developed centralized CRUD APIs for multiple microservices, implemented Role-Based Access Control (RBAC) and JWT authentication, and created logging middleware for system monitoring. Worked on optimizing database queries to enhance response time.',
        logo:'https://res.cloudinary.com/dnkhpkpy4/image/upload/v1754823217/idbfwGjsMF_logos_u86o5c.jpg'
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-12">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <h2 className="text-3xl font-semibold text-white">Experience</h2>
                <div className="mt-8 space-y-6">
                    {experiences.map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-6 rounded-lg bg-slate-800/40 min-h-[180px] border border-slate-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            whileHover={{
                                x: 6,
                                scale: 1.02,
                                boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <div className="flex items-center">
                                <img src={item.logo} className="h-10 w-10 object-contain"/>
                                <div className='ml-4'>
                                    <h4 className="font-semibold text-lg text-white">{item.role}</h4>
                                    <p className="text-sm text-slate-400">{item.period}</p>
                                </div>
                            </div>
                            <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.details}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
