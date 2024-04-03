import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import certificateImage from "@/assests/Images/Frame 1173.png";
import { BiCertification } from "react-icons/bi";

export default function MyCertificates() {
	const certificatesData = [
		{
			id: 1,
			certificateName: "Yellow Belt Certificate",
			achievmentDate: "5 Apr 2024",
			details:
				"non, amet, nibh ullamcorper ex. laoreet amet,  leo. at,  tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu nisi .",
			certificateIcon: "",
		},
		{
			id: 1,
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
				<div className="space-y-4 max-w-[30vw]">
					{certificatesData?.map((data) => (
						<Card className="max-h-60 text-blue-950 rounded-3xl" key={data.id}>
							<div className="flex justify-items-start border-2 gap-1 ">
								<div className="text-2xl py-6 pl-5">
									<BiCertification />
								</div>
								<div>
									<CardHeader>
										<CardTitle className="font-normal pb-5">
											{data.certificateName}
										</CardTitle>
										<CardDescription>
											Achievement Date: {data.achievmentDate}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="font-normal">{data.details}</p>
									</CardContent>
								</div>
							</div>
						</Card>
					))}
				</div>
				{/* certificate views  */}
				<Card className="rounded-3xl">
					<CardContent>
						<Image
							className="p-2 px-6"
							src={certificateImage}
							alt=""
							width={700}
						/>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
