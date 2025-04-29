"use client";

import { useEffect, useState } from "react";

import { Switch } from "~/components/ui/switch";
import { Review } from "~/lib/validations";
import { api } from "~/trpc/react";

import { NavBar } from "../navbar";
import { Language } from "../types";

export default function Page() {
  const [lang, setLang] = useState<Language>("en");

  const { data: reviews, refetch: refetchReviews } =
    api.reviews.getAllReviews.useQuery();
  const { mutate: approveReview, isPending: isApproveReviewPending } =
    api.reviews.approveReview.useMutation({
      onSuccess: () => {
        refetchReviews();
      },
    });
  const { mutate: disapproveReview, isPending: isDisapproveReviewPending } =
    api.reviews.disapproveReview.useMutation({
      onSuccess: () => {
        refetchReviews();
      },
    });

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

  const handleToggle = (review: Review) => {
    if (review.approved) {
      disapproveReview({ id: review.id });
    } else {
      approveReview({ id: review.id });
    }
  };

  return (
    <>
      <NavBar lang={lang} setLang={setLang} />
      <div className="max-w-7xl mx-auto p-2">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl border shadow-md p-6 flex flex-col justify-between h-[250px] my-5"
          >
            <p className="text-gray-600 italic mb-6">"{review.review}"</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  className="w-16 h-16 rounded-full object-cover"
                  alt={review.name}
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">
                  {review.approved ? "Approved" : "Denied"}
                </span>
                <Switch
                  disabled={isApproveReviewPending || isDisapproveReviewPending}
                  checked={review.approved}
                  onCheckedChange={() => handleToggle(review)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
