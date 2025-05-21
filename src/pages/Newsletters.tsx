import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const newsletters = [
	{
		volume: "Volume 1",
		cover: "/nl.png",
		pdf: "https://drive.google.com/file/d/16ENGb6drxbzul8fK0s-nAaU0Vyhz848Z/view?usp=sharing", // Replace with actual Google Drive link
		date: "July 2024 to December 2024",
		description:
			"Inaugural edition featuring department highlights, student achievements, and industry collaborations.",
	},
	{
		volume: "Volume 2",
		cover: "/nl.png",
		pdf: "https://drive.google.com/file/d/1-JHobfn7eTkcFMTrUYcRAk5oH3EWKih9/view?usp=sharing", // Replace with actual Google Drive link
		date: "January 2025 to June 2025",
		description:
			"Second edition with research spotlights, club activities, and placement success stories.",
	},
];

const Newsletters = () => {
	const [openIdx, setOpenIdx] = React.useState<number | null>(null);

	// Helper to convert Google Drive view link to previewable embed link
	const getEmbedUrl = (url: string) => {
		const match = url.match(/\/d\/([\w-]+)\//);
		return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
	};

	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold font-heading text-department-dark mb-4">
						Department Newsletters
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Stay updated with our department’s latest news, achievements, and
						events. Browse and read our beautifully designed newsletters in PDF
						format.
					</p>
					<div className="w-20 h-1 bg-department-accent mx-auto mt-6"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{newsletters.map((nl, idx) => (
						<Card
							key={idx}
							className="shadow-md border-none card-hover-effect"
						>
							<CardContent className="p-6 flex flex-col items-center text-center">
								<div className="w-40 h-56 rounded-lg overflow-hidden shadow mb-4 bg-gray-100 flex items-center justify-center">
									<img
										src={nl.cover}
										alt={`Cover of ${nl.volume}`}
										className="object-cover w-full h-full"
										onError={(e) =>
											(e.currentTarget.src = "/placeholder.svg")
										}
									/>
								</div>
								<h2 className="text-2xl font-bold font-heading text-department-dark mb-2">
									{nl.volume}
								</h2>
								<div className="text-department-accent font-semibold mb-2">
									{nl.date}
								</div>
								<p className="text-gray-600 mb-4">{nl.description}</p>
								<Button
									variant="default"
									className="flex items-center gap-2"
									onClick={() => setOpenIdx(idx)}
								>
									<Eye size={18} /> View PDF
								</Button>
							</CardContent>
							{/* Overlay Dialog for PDF */}
							<Dialog open={openIdx === idx} onOpenChange={() => setOpenIdx(null)}>
								<DialogContent className="max-w-4xl w-full p-0 bg-white rounded-lg shadow-2xl border-0">
									<DialogHeader className="p-4 border-b">
										<DialogTitle className="text-2xl font-bold text-department-dark">{nl.volume} PDF</DialogTitle>
									</DialogHeader>
									<div className="w-full aspect-video bg-gray-50 flex items-center justify-center">
										<iframe
											src={getEmbedUrl(nl.pdf)}
											title={nl.volume}
											className="w-full h-full rounded-b-lg border-0"
											allow="autoplay"
										></iframe>
									</div>
								</DialogContent>
							</Dialog>
						</Card>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Newsletters;
