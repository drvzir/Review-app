import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface Props {
	LeftIcon: IconType;
	leftIconSize?: number;
	leftIconClassName?: string;
	text: string;
	textClassName?: string;
	className?: string;
	isSelected: boolean;
	onClick: () => void;
}

const IconBtn = (props: Props) => {
	const {
		LeftIcon,
		text,
		className,
		leftIconClassName,
		leftIconSize,
		textClassName,
		isSelected,
		onClick,
	} = props;

	return (
		<button
			className={twMerge(
				"flex w-fit justify-center items-center font-open-sans",
				className
			)}
			onClick={onClick}
		>
			<LeftIcon
				size={leftIconSize ?? 22}
				className={twMerge(
					isSelected ? "text-primary-green" : "text-light-gray",
					leftIconClassName
				)}
			/>

			<p className={twMerge("text-sm text-primary-dark ml-2", textClassName)}>
				{text}
			</p>
		</button>
	);
};

export default IconBtn;
