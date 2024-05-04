import { twMerge } from "tailwind-merge";

interface Props {
	heading: string;
	subHeading: string;
	className?: string;
	headingClassName?: string;
	subHeadingClassName?: string;
}

const SectionHeading = (props: Props) => {
	const {
		heading,
		subHeading,
		className,
		headingClassName,
		subHeadingClassName,
	} = props;

	return (
		<div
			className={twMerge(
				"flex w-full flex-col justify-center font-open-sans",
				className
			)}
		>
			<p
				className={twMerge(
					"sm:text-xl text-2xl font-semibold text-primary-dark",
					headingClassName
				)}
			>
				{heading}
			</p>

			<p
				className={twMerge(
					"text-xs text-secondary-gray mt-0.5",
					subHeadingClassName
				)}
			>
				{subHeading}
			</p>
		</div>
	);
};

export default SectionHeading;
