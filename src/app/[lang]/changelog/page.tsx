import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

export const metadata: Metadata = {
    title: "Changelog | Luxora Bot Project",
    description: "Latest updates and changes to Luxora Bots.",
};

const changelogDataStatic = [
    {
        id: "1",
        botName: "Luxora Anti-Spam Bot",
        botBadgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
        version: "v1.2.0",
        date: "March 4, 2026",
    },
    {
        id: "2",
        botName: "Luxora Welcome Bot",
        botBadgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
        version: "v2.0.1",
        date: "March 2, 2026",
    },
    {
        id: "3",
        botName: "Global Platform",
        botBadgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
        version: "v1.0.0",
        date: "March 1, 2026",
    }
];

export default async function ChangelogPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return (
        <main className="flex-1 flex flex-col items-center pt-32 pb-24 w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight mb-4">{dict.changelogPage.title}</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {dict.changelogPage.description}
                </p>
            </div>

            <div className="w-full max-w-4xl space-y-12">
                {changelogDataStatic.map((item, index) => {
                    const dictItem = dict.changelogPage.items[index];
                    return (
                        <div key={item.id} className="border-l-2 border-blue-500 pl-6 pb-2">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className={`text-xs font-bold px-2.5 py-1 rounded ${item.botBadgeColor}`}>
                                    {item.botName}
                                </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded dark:bg-blue-900/40 dark:text-blue-300">
                                    {item.version}
                                </span>
                                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{dictItem.title}</h3>
                            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                                {dictItem.changes.map((change: string, i: number) => (
                                    <li key={i}>{change}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
