"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const getBotsData = (dict: any) => [
    {
        name: dict.bots.luxanony?.name || "Luxora Anony Chat",
        description: dict.bots.luxanony?.description || "Anonymous chat bot for Telegram.",
        status: "Online",
        statusColor: "bg-emerald-500",
        icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
        href: "/bot/luxanony"
    }
];

export default function BotCards({ dict }: { dict: any }) {
    const bots = getBotsData(dict);

    return (
        <section className="w-full py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black dark:text-white">{dict.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {dict.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bots.map((bot, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="group flex flex-col justify-between p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black shadow-sm border border-zinc-100 dark:border-zinc-800 flex items-center justify-center">
                                    {bot.icon}
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                    <span className={`w-2 h-2 rounded-full ${bot.statusColor}`} />
                                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{bot.status}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{bot.name}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{bot.description}</p>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href={bot.href}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                                >
                                    {dict.learnMore} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
