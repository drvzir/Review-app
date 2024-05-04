import { ReviewModal } from "@/components/modals";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center bg-semi-transparent">
			<ReviewModal />
		</main>
	);
}
