"use client";
import { useEffect, useState } from "react";
import { NavBar } from "../navbar";
import { Language } from "../types";

// Dummy review type
type Review = {
    id: number;
    name: string;
    position: string;
    date: string;
    comment: string;
    image: string;
    approved: boolean;
};

export default function Page() {
    const [lang, setLang] = useState<Language>("en");

    const [reviews, setReviews] = useState<Review[]>([
        {
            id: 1,
            name: "John Doe",
            position: "Manager",
            date: "2025-04-28",
            comment: "Great service, highly recommend!",
            image: "/man-review.png",
            approved: false,
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "CEO",
            date: "2025-04-27",
            comment: "Professional and timely support.",
            image: "/woman-review.png",
            approved: true,
        },
    ]);

    console.log(reviews)

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


    const handleToggle = (id: number) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id ? { ...review, approved: !review.approved } : review
            )
        );
    };

    return (
        <>
            <NavBar lang={lang} setLang={setLang} />
            <div className="max-w-7xl mx-auto p-2">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px] my-5"
                    >
                        <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={review.image}
                                    className="w-16 h-16 rounded-full object-cover"
                                    alt={review.name}
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.position}</p>
                                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span className="text-sm text-gray-700">
                                    {review.approved ? "Approved" : "Denied"}
                                </span>
                                <button
                                    onClick={() => handleToggle(review.id)}
                                    className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ${review.approved ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    <div
                                        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${review.approved ? "translate-x-7" : ""
                                            }`}
                                    ></div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
