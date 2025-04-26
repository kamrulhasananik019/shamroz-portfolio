import { Linkedin } from "lucide-react";
import Link from "next/link";
import { menuItems } from "./config";
import { Language } from "./types";

export const Footer = ({ lang }: { lang: Language }) => {
    const contactInfo: Record<Language, { phone: string; address: string; email: string }> = {
        en: {
            phone: "+33 (0)7 82 86 55 18",
            address: "50 avenue des Champs-Élysées, 75008 Paris",
            email: "business@kskimex.com"
        },
        fr: {
            phone: "+33 (0)7 82 86 55 18",
            address: "50 avenue des Champs-Élysées, 75008 Paris",
            email: "business@kskimex.com"
        },
        de: {
            phone: "+33 (0)7 82 86 55 18",
            address: "50 avenue des Champs-Élysées, 75008 Paris",
            email: "business@kskimex.com"
        }
    };

    const footerTexts: Record<Language, { rights: string; cookies: string; privacy: string; terms: string }> = {
        en: {
            rights: "KSK Textile © 2025. All rights reserved.",
            cookies: "Cookies Policy",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions"
        },
        fr: {
            rights: "KSK Textile © 2025. Tous droits réservés.",
            cookies: "Politique des cookies",
            privacy: "Politique de confidentialité",
            terms: "Conditions générales"
        },
        de: {
            rights: "KSK Textile © 2025. Alle Rechte vorbehalten.",
            cookies: "Cookie-Richtlinie",
            privacy: "Datenschutzrichtlinie",
            terms: "Geschäftsbedingungen"
        }
    };

    const contactLabels: Record<Language, { phone: string; address: string; email: string }> = {
        en: {
            phone: "Phone",
            address: "Address",
            email: "Email"
        },
        fr: {
            phone: "Téléphone",
            address: "Adresse",
            email: "Email"
        },
        de: {
            phone: "Telefon",
            address: "Adresse",
            email: "E-Mail"
        }
    };

    return (
        <div className="bg-[#d9dce4] text-gray-800">
            <div className="container mx-auto px-4 pt-12 pb-6">
                <div className="grid grid-cols-12 gap-6 items-start">
                    {/* Logo + Socials */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <p className="text-2xl font-medium">KSK Textile</p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/ksk-textile-quality-textile-solutions-9a5288361/"
                                className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition"
                            >
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-6 md:mt-0">
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                            {menuItems[lang].map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.id.startsWith("/") ? item.id : `#${item.id}`}
                                    className="hover:underline transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start text-sm space-y-4 mt-6 md:mt-0">
                        <div className="text-center md:text-left">
                            <p className="font-semibold">{contactLabels[lang].phone}</p>
                            <p>{contactInfo[lang].phone}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-semibold">{contactLabels[lang].address}</p>
                            <p>{contactInfo[lang].address}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-semibold">{contactLabels[lang].email}</p>
                            <p>{contactInfo[lang].email}</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">
                    <p>{footerTexts[lang].rights}</p>
                    <div className="flex gap-4">
                        <Link href="/cookies-policy" className="hover:underline">
                            {footerTexts[lang].cookies}
                        </Link>
                        <Link href="/privacy" className="hover:underline">
                            {footerTexts[lang].privacy}
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            {footerTexts[lang].terms}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};