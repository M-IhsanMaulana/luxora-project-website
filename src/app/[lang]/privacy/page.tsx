import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

export const metadata: Metadata = {
    title: "Privacy & Policy | Luxora Bot Project",
    description: "Privacy policy and terms of service for Luxora Bots.",
};

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);
    const currentDate = new Date().toLocaleDateString(lang === "id" ? 'id-ID' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <main className="flex-1 flex flex-col items-center w-full bg-zinc-50 dark:bg-black min-h-screen">
            <div className="pt-32 pb-24 px-6 w-full max-w-5xl">
                <div className="bg-white dark:bg-zinc-900/40 rounded-3xl p-8 md:p-16 shadow-sm border border-zinc-200/60 dark:border-zinc-800/60">
                    <div className="border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
                            {dict.privacyPage.title}
                        </h1>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                            {dict.privacyPage.lastUpdated} {currentDate}
                        </p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none w-full prose-p:leading-loose prose-p:mb-6 prose-li:my-4 prose-ul:my-8 prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-white text-zinc-700 dark:text-zinc-300">
                        <p className="text-xl leading-relaxed mb-12">
                            {dict.privacyPage.intro.split("**").map((part, i) => i % 2 === 1 ? <strong key={i} className="text-zinc-900 dark:text-white">{part}</strong> : part)}
                        </p>

                        {dict.privacyPage.sections.map((section: any, idx: number) => (
                            <div key={idx}>
                                <h2 className="text-2xl md:text-3xl mt-16 mb-6">{section.title}</h2>
                                <p>{section.content}</p>
                                {section.list && section.list.length > 0 && (
                                    <ul className="list-disc pl-6 marker:text-zinc-400 dark:marker:text-zinc-600 space-y-4">
                                        {section.list.map((item: string, i: number) => {
                                            const parts = item.split("**");
                                            return (
                                                <li key={i}>
                                                    {parts.map((p, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-zinc-900 dark:text-white">{p}</strong> : p)}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
