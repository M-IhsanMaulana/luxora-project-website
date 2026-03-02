"use client";

import Link from "next/link";
import { Bot, Home, Shield, Mail, History, FileText } from "lucide-react";

export function Footer({ dict, lang }: { dict: any; lang: string }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black mt-auto">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <Link href={`/${lang}`} className="flex items-center gap-2 w-fit group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-105">
                                <Bot className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-black dark:text-white">
                                Luxora<span className="text-blue-600 dark:text-blue-500">Bots</span>
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
                            {dict.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 mb-6 uppercase">
                            {dict.quickLinks || "Quick Links"}
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link scroll={true} href={`/${lang}`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <Home className="w-4 h-4" />
                                    {dict.nav?.home || "Home"}
                                </Link>
                            </li>
                            <li>
                                <Link scroll={true} href={`/${lang}/bot`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <Bot className="w-4 h-4" />
                                    {dict.nav?.bots || "Bots"}
                                </Link>
                            </li>
                            <li>
                                <Link scroll={true} href={`/${lang}/changelog`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <History className="w-4 h-4" />
                                    {dict.nav?.changelog || "Changelog"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 mb-6 uppercase">
                            {dict.legal}
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link scroll={true} href={`/${lang}/privacy`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    {dict.privacyPolicy}
                                </Link>
                            </li>
                            <li>
                                <Link scroll={true} href={`/${lang}/contact`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    {dict.nav?.contact || "Contact"}
                                </Link>
                            </li>
                            <li>
                                <Link scroll={true} href={`/${lang}/terms`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    {dict.termsOfService}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left">
                        &copy; {currentYear} {dict.rightsReserved}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2 font-medium px-4 py-2 rounded-full bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                        {dict.by} <span className="text-black dark:text-white font-bold tracking-tight">Growth Coder Project</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
