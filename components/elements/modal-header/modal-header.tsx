import { twMerge } from "tailwind-merge";

interface Props {
	heading: string;
	className?: string;
	textClassName?: string;
}

const ModalHeader = (props: Props) => {
	const { heading, className, textClassName } = props;

	return (
		<div
			className={twMerge("w-full flex items-center font-open-sans", className)}
		>
			<h1
				className={twMerge(
					"sm:text-2xl text-3xl text-primary-dark font-semibold",
					textClassName
				)}
			>
				{heading}
			</h1>
		</div>
	);
};

export default ModalHeader;
