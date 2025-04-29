"use client";

import { useState } from "react";

import { nanoid } from "nanoid";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Review } from "~/lib/validations";
import { api } from "~/trpc/react";

import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

type Language = "en" | "fr" | "de";
interface ReviewContent {
  title: string;
}

const content: Record<Language, ReviewContent> = {
  en: { title: "Reviews" },
  fr: { title: "Avis Clients" },
  de: { title: "Bewertungen" },
};

export default function Reviews({ lang }: { lang: Language }) {
  const { data: reviews } = api.reviews.getReviews.useQuery();
  const { mutate: addReview, isPending: isAddReviewPending } =
    api.reviews.addReview.useMutation();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newReview, setNewReview] = useState<
    Omit<Review, "id" | "createdAt" | "approved">
  >({
    image: "/man-review.png",
    name: "",
    role: "",
    company: "",
    review: "",
  });

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setNewReview({
      image: "/man-review.png",
      name: "",
      role: "",
      company: "",
      review: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewReview((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddReview = async () => {
    if (
      !newReview.name ||
      !newReview.role ||
      !newReview.company ||
      !newReview.review
    ) {
      alert("Please fill out all fields");
      return;
    }

    addReview({
      id: nanoid(),
      name: newReview.name,
      role: newReview.role,
      company: newReview.company,
      review: newReview.review,
      createdAt: new Date(),
      image: newReview.image,
      approved: false,
    });

    closeDialog();
  };

  return (
    <div id="reviews" className="max-w-7xl mx-auto p-4 md:my-28 my-10">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-600 text-center tracking-tight mb-10">
        {content[lang].title}
      </h2>

      <div className="flex justify-center mb-8">
        <Button onClick={openDialog}>Add Review</Button>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add a New Review</DialogTitle>
            <DialogDescription>
              Fill out the details below to add a new customer review.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newReview.name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Position
              </Label>
              <Input
                id="role"
                value={newReview.role}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input
                id="company"
                value={newReview.company}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="text" className="text-right pt-2">
                Review
              </Label>
              <textarea
                id="review"
                value={newReview.review}
                onChange={handleChange}
                className="col-span-3 border rounded-md p-2 min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleAddReview} disabled={isAddReviewPending}>
              {isAddReviewPending ? "Saving..." : "Save"}
            </Button>
            <Button
              variant="outline"
              onClick={closeDialog}
              disabled={isAddReviewPending}
            >
              Cancel
            </Button>
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
              <p className="text-gray-600 italic mb-6">"{review.review}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
