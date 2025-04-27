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
    const [isOpen, setIsOpen] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);

    const toggleLang = (language: Language) => {
        setLang(language);
        setShowLangDropdown(false);
        if (isOpen) setIsOpen(false);
    };

    return (
        <nav className="w-full bg-zinc-900/80 backdrop-blur-md backdrop-saturate-50 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-6 relative">
                <Link href="/" className="text-2xl font-medium text-white flex items-center gap-2">
                    <img src="/logo-icon-only.png" alt="KSK Textile" width={28} height={28} />
                    KSK Textile
                </Link>

                {/* Desktop menu */}
                <div className="hidden lg:flex flex-1 justify-center space-x-6 text-white font-medium">
                    {menuItems[lang].map((item, index) => (
                        <a
                            key={index}
                            href={item.id === 'home' ? '/#home' : `#${item.id}`}
                            className="hover:text-pink-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Language dropdown - desktop */}
                <div className="hidden lg:block relative">
                    <button
                        onClick={() => setShowLangDropdown(!showLangDropdown)}
                        className="text-white font-semibold flex items-center space-x-2"
                    >
                        <span>{flagEmojis[lang]} {lang.toUpperCase()}</span>
                    </button>
                    {showLangDropdown && (
                        <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                            {(["en", "fr", "de"] as Language[]).map((language) => (
                                <button
                                    key={language}
                                    onClick={() => toggleLang(language)}
                                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                                >
                                    {flagEmojis[language]} {language.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Hamburger menu button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-black/80 backdrop-blur-sm px-6 py-3 flex flex-col items-center  text-white font-medium">
                    {menuItems[lang].map((item, index) => (
                        <a
                            key={index}
                            href={item.id === 'home' ? '/#home' : `#${item.id}`}
                            className="hover:text-pink-300 transition w-full text-center py-2"
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
                            <div className="absolute right-1/2 translate-x-1/2 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                                {(["en", "fr", "de"] as Language[]).map((language) => (
                                    <button
                                        key={language}
                                        onClick={() => toggleLang(language)}
                                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
                                    >
                                        {flagEmojis[language]} {language.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
