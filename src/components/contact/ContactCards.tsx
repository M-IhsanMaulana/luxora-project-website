"use client";

import { motion } from "motion/react";
import { Mail, Send, Bot } from "lucide-react";
import Link from "next/link";

const contacts = [
    {
        name: "Email Support",
        description: "For formal inquiries and business proposals.",
        value: "growthcoderproject@gmail.com",
        href: "mailto:growthcoderproject@gmail.com",
        icon: Mail,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    },
    {
        name: "Telegram Owner",
        description: "Direct contact with the project owner.",
        value: "@ihsannmln",
        href: "https://t.me/ihsannmln",
        icon: Send,
        color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    },
    {
        name: "Support Bot",
        description: "24/7 automated support and ticketing system.",
        value: "Luxora Project Support",
        href: "https://t.me/luxorasupportbot",
        icon: Bot,
        color: "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function ContactCards() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
        >
            {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${contact.color}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">{contact.name}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 h-12">
                            {contact.description}
                        </p>

                        <Link
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {contact.value}
                            <svg className="w-4 h-4 ml-1 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
