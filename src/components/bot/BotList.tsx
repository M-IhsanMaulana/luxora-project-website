"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, MessageCircle, Server } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface BotDetail {
    label: string;
    value: string;
}

interface BotData {
    name: string;
    description: string;
    platform: "Telegram" | "Discord" | "Web";
    status: "Online" | "Maintenance" | "Beta" | "Offline";
    statusColor: string;
    details: BotDetail[];
    botUrl: string;
    siteUrl: string;
    logoUrl?: string;
}

const getPlatformIcon = (platform: BotData["platform"]) => {
    switch (platform) {
        case "Telegram":
            return <MessageCircle className="w-4 h-4" />;
        case "Discord":
            return <Server className="w-4 h-4" />;
        case "Web":
            return <Globe className="w-4 h-4" />;
        default:
            return null;
    }
};

const getBotsData = (dict: any, dictCards: any): BotData[] => [
    {
        name: dictCards.bots.luxanony?.name || "Luxora Anony Chat",
        description: dictCards.bots.luxanony?.description || "Anonymous chat bot for Telegram.",
        platform: "Telegram",
        status: "Online",
        statusColor: "bg-emerald-500",
        details: [
            { label: dict.details.luxanony?.activeUsers || "Active Users", value: "10K+" },
            { label: dict.details.luxanony?.messagesSent || "Messages Sent", value: "5M+" },
        ],
        botUrl: "https://t.me/luxanonychatbot", // Need to verify actual bot URL or keep it generic
        siteUrl: "/bot/luxanony",
        logoUrl: "/images/logo/logo-anony-chat.png",
    }
];

export default function BotList({ dict, dictCards }: { dict: any, dictCards: any }) {
    const bots = getBotsData(dict, dictCards);

    return (
        <section className="w-full pb-24 pt-12 px-6 bg-zinc-50 dark:bg-black">
            <div className="max-w-6xl mx-auto space-y-8">
                {bots.map((bot, i) => (
                    <motion.div
                        key={bot.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md"
                    >
                        {/* Logo & Status Stack */}
                        <div className="flex flex-row md:flex-col items-start justify-between md:justify-start gap-4">
                            <div className="w-20 h-20 rounded-2xl bg-zinc-100 dark:bg-zinc-800 shadow-inner border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden relative">
                                {bot.logoUrl ? (
                                    <img src={bot.logoUrl} alt={`${bot.name} logo`} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Logo</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                    <span className={`w-2 h-2 rounded-full ${bot.statusColor}`} />
                                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{bot.status}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400">
                                    {getPlatformIcon(bot.platform)}
                                    <span className="text-xs font-medium">{bot.platform}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold mb-3 text-black dark:text-white">{bot.name}</h3>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {bot.description}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {bot.details.map((detail, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">{detail.label}</span>
                                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                                <Link
                                    href={bot.botUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {dict.goToBot} <ArrowUpRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href={bot.siteUrl}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-semibold text-sm transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                >
                                    {dict.siteDetails}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
