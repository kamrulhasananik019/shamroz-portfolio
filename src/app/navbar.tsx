import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { flagEmojis, menuItems } from "./config";
import { Language } from "./types";

interface NavBarProps {
    lang: Language;
    setLang: (lang: Language) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ lang, setLang }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);

    const toggleLang = (language: Language) => {
        setLang(language);
        setShowLangDropdown(false);
        if (isOpen) setIsOpen(false);
    };

    return (
        <nav className="w-full bg-zinc-900/80 backdrop-blur-md backdrop-saturate-50 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
                <Link href="/" className="text-2xl font-medium text-white flex items-center gap-2">
                    <img src="/logo-icon-only.png" alt="KSK Textile" width={28} height={28} />
                    KSK Textile
                </Link>


                <div className="hidden md:flex flex-1 justify-center space-x-6 text-white font-medium">
                    {menuItems[lang].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`}
                            className="hover:text-pink-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>


                <div className="hidden md:block relative">
                    <button
                        onClick={() => setShowLangDropdown(!showLangDropdown)}
                        className="text-white font-semibold flex items-center space-x-2"
                    >
                        <span>{flagEmojis[lang]} {lang.toUpperCase()}</span>
                    </button>
                    {showLangDropdown && (
                        <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                            <button
                                onClick={() => toggleLang("en")}
                                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                            >
                                🇬🇧 English
                            </button>
                            <button
                                onClick={() => toggleLang("fr")}
                                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                            >
                                🇫🇷 Français
                            </button>
                            <button
                                onClick={() => toggleLang("de")}
                                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                            >
                                🇩🇪 Deutsch
                            </button>
                        </div>
                    )}
                </div>


                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-6 flex justify-center">
                    <div className="flex flex-col items-center space-y-4 text-white font-medium mt-4 w-full">
                        {menuItems[lang].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.id}`}
                                className="hover:text-pink-300 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="relative mt-4">
                            <button
                                onClick={() => setShowLangDropdown(!showLangDropdown)}
                                className="text-white font-semibold flex items-center space-x-2"
                            >
                                <span>{flagEmojis[lang]} {lang.toUpperCase()}</span>
                            </button>
                            {showLangDropdown && (
                                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                                    <button
                                        onClick={() => toggleLang("en")}
                                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                                    >
                                        🇬🇧 English
                                    </button>
                                    <button
                                        onClick={() => toggleLang("fr")}
                                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                                    >
                                        🇫🇷 Français
                                    </button>
                                    <button
                                        onClick={() => toggleLang("de")}
                                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                                    >
                                        🇩🇪 Deutsch
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};