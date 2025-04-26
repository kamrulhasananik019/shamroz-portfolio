import { Language, MenuItem } from "./types";

export const menuItems: Record<Language, MenuItem[]> = {
    en: [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Expertise", id: "expertise" },
        { label: "Products", id: "products" },
        { label: "Quality Assurance", id: "quality-assurance" },
        { label: "Reviews", id: "reviews" },
        { label: "Contact Us", id: "contact-us" },
    ],
    fr: [
        { label: "Accueil", id: "home" },
        { label: "À propos", id: "about" },
        { label: "Expertise", id: "expertise" },
        { label: "Produits", id: "products" },
        { label: "Assurance qualité", id: "quality-assurance" },
        { label: "Avis", id: "reviews" },
        { label: "Contactez-nous", id: "contact-us" },
    ],
    de: [
        { label: "Startseite", id: "home" },
        { label: "Über uns", id: "about" },
        { label: "Expertise", id: "expertise" },
        { label: "Produkte", id: "products" },
        { label: "Qualitätssicherung", id: "quality-assurance" },
        { label: "Bewertungen", id: "reviews" },
        { label: "Kontakt", id: "contact-us" },
    ],
};

export const flagEmojis: Record<Language, string> = {
    en: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪"
};