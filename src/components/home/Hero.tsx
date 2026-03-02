"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ dict }: { dict: any }) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
    };

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-white dark:bg-black -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center text-center max-w-4xl pt-20"
            >
                <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    <span>{dict.badge}</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-8"
                >
                    {dict.titleLine1} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{dict.titleLine2}</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12"
                >
                    {dict.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/bot"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
                    >
                        {dict.exploreBots} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900 px-8 font-medium text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    >
                        {dict.contactUs}
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
