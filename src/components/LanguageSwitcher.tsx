"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "en", name: "English", short: "EN" },
        { code: "id", name: "Indonesia", short: "ID" },
    ];

    const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 focus:outline-none cursor-pointer"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <Globe className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                <span>{currentLanguage.short}</span>
                <ChevronDown
                    className={`h-3 w-3 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-2 w-36 origin-top-right overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1 shadow-xl outline-none dark:border-zinc-800 dark:bg-black z-50"
                        role="listbox"
                    >
                        {languages.map((lang) => {
                            const isSelected = lang.code === currentLang;
                            // Replaces the first path segment (the locale) with the new locale
                            const newPathname = pathname.replace(`/${currentLang}`, `/${lang.code}`);

                            return (
                                <Link
                                    key={lang.code}
                                    href={newPathname}
                                    onClick={() => setIsOpen(false)}
                                    role="option"
                                    aria-selected={isSelected}
                                    className={`block w-full rounded-xl px-3 py-2 text-sm text-left transition-colors ${isSelected
                                        ? "bg-zinc-100 font-semibold text-black dark:bg-zinc-900 dark:text-white"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-white"
                                        }`}
                                >
                                    {lang.name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
