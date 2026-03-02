"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Home } from "lucide-react";

export function NotFoundContent() {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center p-6 relative overflow-hidden text-zinc-900 dark:text-zinc-50">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    className="relative"
                >
                    <h1 className="text-[120px] md:text-[180px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-800 to-zinc-400 dark:from-white dark:to-zinc-600 leading-none">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                        Oops! The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
                            >
                                <Home className="w-4 h-4" />
                                <span>Back to Home</span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
