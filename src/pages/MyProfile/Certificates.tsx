"use client";
import MyCertificates from "@/components/CertificatesCards/MyCertificate";
import Transcripts from "@/components/CertificatesCards/Transcript";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CgTranscript } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";

export default function Certificates() {
	const [tabMenu, setActiveTabMenu] = useState("certificates");
	return (
		<>
			{/* Tab menu  */}
			<div className="flex gap-6 item-center">
				<Button
					onClick={() => setActiveTabMenu("certificates")}
					className={
						tabMenu === "certificates"
							? "flex gap-3 py-8 items-center text-white rounded-3xl pr-20  hover:bg-yellow-500  bg-yellow-500"
							: "flex gap-3 py-8 items-center hover:text-white rounded-3xl pr-20 text-blue-950 bg-[#eaeafb] hover:bg-yellow-500"
					}
				>
					<FaCertificate />
					My Certificates
				</Button>
				<Button
					onClick={() => setActiveTabMenu("transcript")}
					className={
						tabMenu === "transcript"
							? "flex gap-3 py-8 items-center text-white rounded-3xl pr-20 hover:bg-yellow-500   bg-yellow-500"
							: "flex gap-3 py-8 items-center hover:text-white rounded-3xl pr-20 text-blue-950 bg-[#eaeafb] hover:bg-yellow-500"
					}
				>
					<CgTranscript />
					Transcript
				</Button>
			</div>

			{/* container card section */}
			<section className="bg-[#eaeafb] p-6 mt-6 rounded-3xl">
				{tabMenu === "certificates" && <MyCertificates />}
				{tabMenu === "transcript" && <Transcripts />}
			</section>
		</>
	);
}
