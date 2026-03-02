"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ dict }: { dict: any }) {
    return (
        <section className="w-full py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="px-6 py-16 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden shadow-2xl"
                >
                    {/* SVG Dot Motif Background */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="cta-dots" width="32" height="32" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="2" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-dots)" />
                        </svg>
                    </div>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 z-0" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 z-0" />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 opacity-10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 z-0" />

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 relative z-10 max-w-2xl mx-auto">
                        {dict.title}
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
                        {dict.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link
                            href={process.env.NEXT_PUBLIC_CHANNEL_URL || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 font-semibold text-blue-600 transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-lg group"
                        >
                            {dict.button} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
