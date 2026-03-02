import { Metadata } from "next";
import ContactCards from "@/components/contact/ContactCards";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

export const metadata: Metadata = {
    title: "Contact | Luxora Bot Project",
    description: "Get in touch with the Luxora Bot Project team. Reach out via Email, Telegram, or our Support Bot.",
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return (
        <main className="flex-1 flex flex-col items-center w-full bg-zinc-50 dark:bg-black min-h-screen">
            <div className="pt-32 pb-12 px-6 text-center w-full max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                    {dict.contactPage.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
                    {dict.contactPage.description}
                </p>
            </div>

            <div className="w-full relative px-6 pb-12">
                {/* Optional decorative background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full -z-10 pointer-events-none" />

                <ContactCards />
            </div>

            <div className="pb-24 text-center px-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-500">
                    {dict.contactPage.footerNote1} <br />
                    {dict.contactPage.footerNote2}
                </p>
            </div>
        </main>
    );
}
