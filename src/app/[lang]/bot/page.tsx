import { Metadata } from "next";
import BotList from "@/components/bot/BotList";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

export const metadata: Metadata = {
    title: "Bots | Luxora Bot Project",
    description: "Explore the wide range of features available in the Luxora Bot ecosystem.",
};

export default async function BotPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return (
        <main className="flex-1 flex flex-col items-center w-full bg-zinc-50 dark:bg-black min-h-screen">
            <div className="pt-32 pb-12 px-6 text-center w-full">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black dark:text-white">{dict.botPage.title}</h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    {dict.botPage.description}
                </p>
            </div>

            <BotList dict={dict.botList} dictCards={dict.botCards} />
        </main>
    );
}
