import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import certificateImage from "@/assests/Images/Frame 1173.png";
import certificateYellowImage from "@/assests/Images/yellow.png";
import certificationSVG from "@/assests/icon/Group 161.png";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

export default function MyCertificates() {
	const [activeCetificate, setActiveCertificate] = useState(1);
	const certificatesData = [
		{
			id: 1,
			certificateName: "White Belt Certificate",
			achievmentDate: "5 Apr 2024",
			details:
				"non, amet, nibh ullamcorper ex. laoreet amet,  leo. at,  tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu nisi .",
			certificateIcon: "",
		},
		{
			id: 2,
			certificateName: "Yellow Belt Certificate",
			achievmentDate: "5 Apr 2024",
			details:
				"non, amet, nibh ullamcorper ex. laoreet amet,  leo. at,  tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu nisi .",
			certificateIcon: "",
		},
	];
	return (
		<>
			<div className="md:flex gap-4 ">
				{/* certificate details  */}
				<div className="space-y-4 md:max-w-[30vw]">
					{certificatesData?.map((data) => (
						<Card
							onClick={() => setActiveCertificate(data.id)}
							className={
								activeCetificate === data.id
									? "md:max-h-60  text-blue-950 rounded-3xl"
									: "md:max-h-60 hover:bg-[#ffffff] bg-[#eaeafb] text-blue-950 rounded-3xl"
							}
							key={data.id}
						>
							<div className="flex justify-items-start  gap-1 ">
								<div className="text-2xl py-6 pl-5">
									<Image
										src={certificationSVG}
										alt="Certification Icon"
										width={70}
									/>
								</div>
								<div>
									<CardHeader>
										<CardTitle className="font-normal flex items-center justify-between pb-5">
											{data.certificateName}
											<div className="text-xl text-blue-950 relative z-10 right-0 flex gap-3  pr-0">
												<BsShare />
												<AiOutlineDownload />
											</div>
										</CardTitle>
										<CardDescription>
											Achievement Date: {data.achievmentDate}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="font-normal text-justify">{data.details}</p>
									</CardContent>
								</div>
							</div>
						</Card>
					))}
				</div>
				{/* certificate views  */}
				<Card className="rounded-3xl mt-10 md:mt-0">
					<CardContent>
						{activeCetificate === 1 ? (
							<Image
								className="p-2 px-6"
								src={certificateImage}
								alt=""
								width={700}
							/>
						) : (
							<Image
								className="p-2 px-6"
								src={certificateYellowImage}
								alt=""
								width={700}
							/>
						)}
					</CardContent>
				</Card>
			</div>
		</>
	);
}
