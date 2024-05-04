import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Review App",
	description: "A Review App for tasking",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
