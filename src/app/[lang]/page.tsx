import Hero from "@/components/home/Hero";
import FeatureHighlight from "@/components/home/FeatureHighlight";
import BotCards from "@/components/home/BotCards";
import CallToAction from "@/components/home/CallToAction";

import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero dict={dict.hero} />
      <FeatureHighlight dict={dict.featureHighlight} />
      <BotCards dict={dict.botCards} />
      <CallToAction dict={dict.callToAction} />
    </main>
  );
}
