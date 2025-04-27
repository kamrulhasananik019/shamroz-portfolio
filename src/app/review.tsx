"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

import { Button } from "../components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../components/ui/dialog";
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
    reviews: ReviewItem[];
}

interface ReviewProps {
    lang: Language;
}
export default function Reviews({ lang }: { lang: Language }) {

    const reviewsContent = {
        en: {
            title: "Reviews",
            reviews: [
                {
                    img: "/man-review.png",
                    text: "Working with this textile supplier transformed our guest experience. The linens are luxurious, durable, and our clients instantly noticed the upgrade.",
                    name: "Elise Moreau",
                    position: "Hotel Manager, Le Grand Hôtel Paris",
                    date: "January 2024",
                },
                {
                    img: "/man-review.png",
                    text: "The bathrobes and spa towels were of exceptional quality. Our customers frequently compliment their softness and comfort. Fast delivery too!",
                    name: "Marc Lefevre",
                    position: "Spa Director, Bleu Ciel Wellness",
                    date: "February 2024",
                },
                {
                    img: "/man-review.png",
                    text: "We've partnered for bulk linen supply for over a year now. Their textiles hold up extremely well to industrial washing. Highly reliable.",
                    name: "Isabelle Dumas",
                    position: "Operations Manager, Lavandis Pro",
                    date: "March 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Table linens and aprons were customized exactly to our branding. High-quality fabric, beautiful stitching, and delivered on time.",
                    name: "Thomas Garnier",
                    position: "Owner, Maison Garnier",
                    date: "March 2024",
                },
                {
                    img: "/man-review.png",
                    text: "They understood our needs perfectly. Everything from pillowcases to duvet covers feels premium. Our guests have never been more satisfied.",
                    name: "Claire Fontaine",
                    position: "Director, Hôtel Lumière",
                    date: "April 2024",
                },
            ]
        },
        fr: {
            title: "Avis Clients",
            reviews: [
                {
                    img: "/man-review.png",
                    text: "Travailler avec ce fournisseur textile a transformé l'expérience de nos clients. Le linge est luxueux, durable, et nos clients ont immédiatement remarqué l'amélioration.",
                    name: "Elise Moreau",
                    position: "Directrice d'hôtel, Le Grand Hôtel Paris",
                    date: "Janvier 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Les peignoirs et serviettes de spa étaient d'une qualité exceptionnelle. Nos clients complimentent fréquemment leur douceur et leur confort. Livraison rapide également !",
                    name: "Marc Lefevre",
                    position: "Directeur de Spa, Bleu Ciel Wellness",
                    date: "Février 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Nous sommes partenaires pour la fourniture de linge en gros depuis plus d'un an maintenant. Leurs textiles résistent extrêmement bien au lavage industriel. Très fiable.",
                    name: "Isabelle Dumas",
                    position: "Responsable des Opérations, Lavandis Pro",
                    date: "Mars 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Le linge de table et les tabliers ont été personnalisés exactement selon notre image de marque. Tissu de haute qualité, belles coutures et livrés à temps.",
                    name: "Thomas Garnier",
                    position: "Propriétaire, Maison Garnier",
                    date: "Mars 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Ils ont parfaitement compris nos besoins. Tout, des taies d'oreiller aux housses de couette, est de qualité premium. Nos clients n'ont jamais été aussi satisfaits.",
                    name: "Claire Fontaine",
                    position: "Directrice, Hôtel Lumière",
                    date: "Avril 2024",
                },
            ]
        },
        de: {
            title: "Bewertungen",
            reviews: [
                {
                    img: "/man-review.png",
                    text: "Die Zusammenarbeit mit diesem Textillieferanten hat das Erlebnis unserer Gäste verändert. Die Bettwäsche ist luxuriös, langlebig, und unsere Kunden haben das Upgrade sofort bemerkt.",
                    name: "Elise Moreau",
                    position: "Hotelmanagerin, Le Grand Hôtel Paris",
                    date: "Januar 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Die Bademäntel und Spa-Handtücher waren von außergewöhnlicher Qualität. Unsere Kunden loben häufig ihre Weichheit und ihren Komfort. Auch schnelle Lieferung!",
                    name: "Marc Lefevre",
                    position: "Spa-Direktor, Bleu Ciel Wellness",
                    date: "Februar 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Wir arbeiten seit über einem Jahr für die Großlieferung von Wäsche zusammen. Ihre Textilien halten der industriellen Wäsche außerordentlich gut stand. Sehr zuverlässig.",
                    name: "Isabelle Dumas",
                    position: "Betriebsleiterin, Lavandis Pro",
                    date: "März 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Tischwäsche und Schürzen wurden genau nach unserem Branding angepasst. Hochwertiger Stoff, schöne Nähte und pünktlich geliefert.",
                    name: "Thomas Garnier",
                    position: "Inhaber, Maison Garnier",
                    date: "März 2024",
                },
                {
                    img: "/man-review.png",
                    text: "Sie haben unsere Bedürfnisse perfekt verstanden. Alles, von Kissenbezügen bis zu Bettbezügen, fühlt sich hochwertig an. Unsere Gäste waren noch nie so zufrieden.",
                    name: "Claire Fontaine",
                    position: "Direktorin, Hôtel Lumière",
                    date: "April 2024",
                },
            ]
        }
    };

    const content = reviewsContent[lang];

    const [reviews, setReviews] = useState<ReviewItem[]>(content.reviews);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const [newReview, setNewReview] = useState({
        img: "/man-review.png",
        name: "",
        position: "",
        date: "",
        text: "",
    });

    const openDialog = () => {
        setIsDialogOpen(true);
    };

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

    const handleAddReview = () => {
        if (newReview.name && newReview.position && newReview.date && newReview.text) {
            setReviews(prev => [...prev, newReview]);
            closeDialog();
        }
    };

    return (
        <div id="reviews" className="max-w-7xl mx-auto p-4 md:my-28 my-10">
            <h2 className="text-3xl md:text-5xl font-bold text-pink-600 text-center tracking-tight mb-10">
                {content.title}
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
                {reviews.map((review, index) => (
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