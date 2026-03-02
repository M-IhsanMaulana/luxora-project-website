import "server-only";
import { Locale } from "./config";

const dictionaries = {
    en: () => import("@/locales/en.json").then((module) => module.default),
    id: () => import("@/locales/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale]?.() ?? dictionaries.en();
};
