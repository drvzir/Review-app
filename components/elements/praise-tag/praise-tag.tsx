import { Praise } from "@/types";
import { twMerge } from "tailwind-merge";

interface Props {
	praise: Praise;
	onClick: (id: number) => void;
	className?: string;
	textClassName?: string;
	isSelected: boolean;
}

const PraiseTag = (props: Props) => {
	const { praise, onClick, className, textClassName, isSelected } = props;

	return (
		<button
			className={twMerge(
				"w-fit px-3 py-1.5 flex items-center justify-center font-open-sans",
				isSelected ? "bg-primary-green" : "bg-light-gray",
				className
			)}
			onClick={() => onClick(praise.id)}
		>
			<p className={twMerge("text-sm text-primary-dark", textClassName)}>
				{praise.name}
			</p>
		</button>
	);
};

export default PraiseTag;
