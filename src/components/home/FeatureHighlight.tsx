"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Bot } from "lucide-react";

export default function FeatureHighlight({ dict }: { dict: any }) {
    return (
        <section className="w-full py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black dark:text-white">{dict.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{dict.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Zap className="h-6 w-6 text-yellow-500" />, title: dict.features[0].title, desc: dict.features[0].description },
                        { icon: <Shield className="h-6 w-6 text-green-500" />, title: dict.features[1].title, desc: dict.features[1].description },
                        { icon: <Bot className="h-6 w-6 text-blue-500" />, title: dict.features[2].title, desc: dict.features[2].description },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl transition-transform hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">{feature.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
