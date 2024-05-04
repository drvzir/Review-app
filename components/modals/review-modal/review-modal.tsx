"use client";

import {
	IconBtn,
	ModalHeader,
	PraiseTag,
	SectionHeading,
} from "@/components/elements";
import { praiseData } from "@/constants/praise-data";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { useReviewModal } from "./hook";
import {
	BsFillHandThumbsDownFill,
	BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const ReviewModal = () => {
	const {
		onPraiseClick,
		selectedPraise,
		dislike,
		like,
		likedStatus,
		communicationRating,
		safetyRating,
		updateCommunicationRating,
		updateSafetyRating,
	} = useReviewModal();

	return (
		<div className="w-full max-w-[750px] sm:h-96 h-screen bg-white flex flex-col sm:rounded-md p-5 font-open-sans overflow-y-auto">
			<div>
				<RxCross2 className="text-primary-dark" size={22} />
			</div>

			<ModalHeader heading="Leave a Review" className="mt-3" />

			<div className="w-full flex flex-col mt-8">
				<SectionHeading
					heading="Safety"
					subHeading="How safe did you feel with us?"
				/>

				<div className="w-full flex flex-wrap items-center mt-5">
					{new Array(safetyRating).fill(1).map((_, index) => (
						<button
							key={index}
							className="flex items-center justify-center mx-1"
							onClick={() => updateSafetyRating(index + 1)}
						>
							<FaStar size={25} className="text-primary-yellow" />
						</button>
					))}

					{new Array(5 - safetyRating).fill(1).map((_, index) => (
						<button
							key={index}
							className="flex items-center justify-center mx-1"
							onClick={() => updateSafetyRating(index + 1 + safetyRating)}
						>
							<FaStar size={25} className="text-light-gray" />
						</button>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col mt-8">
				<SectionHeading
					heading="Communication"
					subHeading="How was the communication with the client?"
				/>

				<div className="w-full flex flex-wrap items-center mt-5">
					{new Array(communicationRating).fill(1).map((_, index) => (
						<button
							key={index}
							className="flex items-center justify-center mx-1"
							onClick={() => updateCommunicationRating(index + 1)}
						>
							<FaStar size={25} className="text-primary-yellow" />
						</button>
					))}

					{new Array(5 - communicationRating).fill(1).map((_, index) => (
						<button
							key={index}
							className="flex items-center justify-center mx-1"
							onClick={() =>
								updateCommunicationRating(index + 1 + communicationRating)
							}
						>
							<FaStar size={25} className="text-light-gray" />
						</button>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col mt-8">
				<SectionHeading
					heading="Would you recommend Trausti?"
					subHeading="How likely would you recommend us publicly?"
				/>

				<div className="w-full flex flex-wrap items-center mt-5">
					<IconBtn
						LeftIcon={BsFillHandThumbsUpFill}
						text="Yes"
						isSelected={likedStatus === true}
						onClick={like}
						className="mr-3"
						leftIconSize={35}
					/>

					<IconBtn
						LeftIcon={BsFillHandThumbsDownFill}
						text="No"
						isSelected={likedStatus === false}
						onClick={dislike}
						className="ml-3"
						leftIconSize={35}
					/>
				</div>
			</div>

			<div className="w-full flex flex-col mt-8">
				<SectionHeading
					heading="Praise"
					subHeading="What are the points that you would praise us on?"
				/>

				<div className="w-full flex flex-wrap items-center mt-5">
					{praiseData.map((praise, index) => (
						<PraiseTag
							key={praise.id}
							onClick={onPraiseClick}
							isSelected={praise.id === selectedPraise}
							praise={praise}
							className={twMerge(
								"mx-1.5 rounded-md",
								index === 0 ? "ml-0" : "mr-1.5",
								index === praiseData.length - 1 ? "ml-1.5" : "mr-0"
							)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewModal;
