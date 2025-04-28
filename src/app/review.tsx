"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

type Language = "en" | "fr" | "de";

interface ReviewItem {
    img: string;
    text: string;
    name: string;
    position: string;
    date: string;
}

interface ReviewContent {
    title: string;
}

export default function Reviews({ lang }: { lang: Language }) {
    const content: Record<Language, ReviewContent> = {
        en: { title: "Reviews" },
        fr: { title: "Avis Clients" },
        de: { title: "Bewertungen" },
    };

    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [newReview, setNewReview] = useState({
        img: "/man-review.png",
        name: "",
        position: "",
        date: "",
        text: "",
    });

    // Fetch reviews from KV on component mount
    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch("/api/reviews");
            const data = await res.json();
            console.log("data", data)
            setReviews(data);
        }
        fetchReviews();
    }, []);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => {
        setIsDialogOpen(false);
        setNewReview({
            img: "/man-review.png",
            name: "",
            position: "",
            date: "",
            text: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setNewReview(prev => ({ ...prev, [id]: value }));
    };

    const handleAddReview = async () => {
        if (newReview.name && newReview.position && newReview.date && newReview.text) {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            });

            if (res.ok) {
                setReviews(prev => [...prev, newReview]);
                closeDialog();
            }
        }
    };

    return (
        <div id="reviews" className="max-w-7xl mx-auto p-4 md:my-28 my-10">
            <h2 className="text-3xl md:text-5xl font-bold text-pink-600 text-center tracking-tight mb-10">
                {content[lang].title}
            </h2>

            <div className="flex justify-center mb-8">
                <Button onClick={openDialog}>Add Review</Button>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={(open) => !open && closeDialog()}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add a New Review</DialogTitle>
                        <DialogDescription>
                            Fill out the details below to add a new customer review.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" value={newReview.name} onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="position" className="text-right">Position</Label>
                            <Input id="position" value={newReview.position} onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">Date</Label>
                            <Input id="date" value={newReview.date} onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-start gap-4">
                            <Label htmlFor="text" className="text-right pt-2">Review</Label>
                            <textarea
                                id="text"
                                value={newReview.text}
                                onChange={handleChange}
                                className="col-span-3 border rounded-md p-2 min-h-[100px]"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button onClick={handleAddReview}>Save</Button>
                        <Button variant="outline" onClick={closeDialog}>Cancel</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {reviews?.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px]">
                            <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.position}</p>
                                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
