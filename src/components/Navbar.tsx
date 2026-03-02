"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Home, Bot, Shield, Mail, History } from "lucide-react";

export function Navbar({ dict, lang }: { dict: any, lang: string }) {
    const pathname = usePathname();

    const navLinks = [
        { name: dict.home, href: `/${lang}`, icon: <Home className="h-5 w-5" /> },
        { name: dict.bots, href: `/${lang}/bot`, icon: <Bot className="h-5 w-5" /> },
        { name: dict.privacy, href: `/${lang}/privacy`, icon: <Shield className="h-5 w-5" /> },
        { name: dict.contact, href: `/${lang}/contact`, icon: <Mail className="h-5 w-5" /> },
        { name: dict.changelog, href: `/${lang}/changelog`, icon: <History className="h-5 w-5" /> },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-50 hidden h-16 w-full items-center justify-center border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80 md:flex"
            >
                <div className="flex w-full max-w-6xl items-center justify-between px-6">
                    <Link href={`/${lang}`} className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tighter text-black dark:text-white">
                            {dict.brand} <span className="text-blue-600 dark:text-blue-500">{dict.brandSpan}</span>
                        </span>
                    </Link>

                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${isActive
                                        ? "text-black dark:text-white"
                                        : "text-zinc-600 dark:text-zinc-400"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-500"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher currentLang={lang} />
                        <ThemeToggle />
                    </div>
                </div>
            </motion.header>

            {/* Mobile Bottom Navbar */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t border-zinc-200 bg-white/90 backdrop-blur-lg pb-safe-bottom dark:border-zinc-800 dark:bg-black/90 md:hidden"
            >
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive
                                ? "text-blue-600 dark:text-blue-500"
                                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                }`}
                        >
                            <div
                                className={`flex items-center justify-center p-1 rounded-full ${isActive ? "bg-blue-100 dark:bg-blue-900/30" : ""
                                    }`}
                            >
                                {link.icon}
                            </div>
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </Link>
                    );
                })}
            </motion.nav>

            {/* Mobile Top Bar (Just for Logo & Theme Toggle) */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80 md:hidden"
            >
                <Link href={`/${lang}`} className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tighter text-black dark:text-white">
                        {dict.brand} <span className="text-blue-600 dark:text-blue-500">{dict.brandSpan}</span>
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <LanguageSwitcher currentLang={lang} />
                    <ThemeToggle />
                </div>
            </motion.header>
        </>
    );
}
