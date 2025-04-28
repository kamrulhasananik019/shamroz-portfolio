"use client"
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { NavBar } from "../navbar";
import { Language } from "../types";

export default function page() {
    const [lang, setLang] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("ksk-lang");

        if (savedLang && ["en", "fr", "de"].includes(savedLang)) {
            setLang(savedLang as Language);
        } else {
            localStorage.setItem("ksk-lang", "en");
            setLang("en");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("ksk-lang", lang);
    }, [lang]);
    return (
        <>
            <NavBar lang={lang} setLang={setLang} />
            <div className="max-w-7xl mx-auto p-2">
                <div className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px] my-5">
                    <p className="text-gray-600 italic mb-6">"dfdf"</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/man-review.png"
                                // alt={review.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">name</p>
                                <p className="text-sm text-gray-500">position</p>
                                <p className="text-xs text-gray-400 mt-1">date</p>
                            </div>

                        </div>
                        <div>
                            <Button>approved</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
