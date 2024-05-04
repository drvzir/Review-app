import { useState } from "react";

export const useReviewModal = () => {
	const [selectedPraise, setSelectedPraise] = useState<number | null>(null);
	const [likedStatus, setLikedStatus] = useState<boolean | null>(null);
	const [safetyRating, setSafetyRating] = useState<number>(0);
	const [communicationRating, setCommunicationRating] = useState<number>(0);

	const onPraiseClick = (id: number) => setSelectedPraise(id);

	const setStarRating =
		(setState: React.Dispatch<React.SetStateAction<number>>) =>
		(index: number) =>
			setState(index);

	return {
		selectedPraise,
		onPraiseClick,
		likedStatus,
		like: () => setLikedStatus(true),
		dislike: () => setLikedStatus(false),
		safetyRating,
		communicationRating,
		updateSafetyRating: setStarRating(setSafetyRating),
		updateCommunicationRating: setStarRating(setCommunicationRating),
	};
};
