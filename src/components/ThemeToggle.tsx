"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
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

    if (!mounted) {
        return (
            <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
        );
    }

    const themes = [
        { name: "Light", value: "light", icon: Sun },
        { name: "Dark", value: "dark", icon: Moon },
        { name: "System", value: "system", icon: Monitor },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 overflow-hidden cursor-pointer focus:outline-none"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "light" && (
                        <motion.div
                            key="light"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Sun className="h-5 w-5" />
                        </motion.div>
                    )}
                    {theme === "dark" && (
                        <motion.div
                            key="dark"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Moon className="h-5 w-5" />
                        </motion.div>
                    )}
                    {theme === "system" && (
                        <motion.div
                            key="system"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Monitor className="h-5 w-5" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className="sr-only">Toggle theme</span>
            </motion.button>

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
                        {themes.map((t) => {
                            const isSelected = theme === t.value;
                            const Icon = t.icon;

                            return (
                                <button
                                    key={t.value}
                                    onClick={() => {
                                        setTheme(t.value);
                                        setIsOpen(false);
                                    }}
                                    role="option"
                                    aria-selected={isSelected}
                                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-left transition-colors cursor-pointer ${isSelected
                                            ? "bg-zinc-100 font-semibold text-black dark:bg-zinc-900 dark:text-white"
                                            : "text-zinc-600 hover:bg-zinc-50 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-white"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="flex-1">{t.name}</span>
                                    {isSelected && <Check className="h-4 w-4" />}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
