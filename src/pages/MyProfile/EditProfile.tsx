import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";

export default function EditProfile() {
	return (
		<>
			<div className="shadow p-10 rounded-3xl">
				<div className="flex gap-8 p-5 rounded-full bg-[#eaeafb] items-center">
					<Image
						className="rounded-full border-2"
						src="https://i.ibb.co/SsTzDc9/Ellipse-16.png"
						alt=""
						width={150}
						height={150}
					/>
					<div className="flex gap-3 item-center">
						<button className="border-1 border-[#191661] hover:bg-[#191661] hover:text-white border p-2 text-sm rounded-full px-5">
							Upload Image
						</button>
						<button className="border-1  border-[#191661]  hover:bg-[#191661] hover:text-white  border p-2 text-sm rounded-full px-5">
							Delete
						</button>
					</div>
				</div>

				{/* form  */}
				<div className="py-8 text-[#191661]">
					<form className="space-y-8" action="">
						<div className="md:flex gap-2">
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="name">Name:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="text"
									id="name"
									placeholder="Assessment Username"
									defaultValue={"Assessment Username"}
								/>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="nation">Nationality:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="text"
									id="Nationality"
									placeholder="Bangladesh"
									defaultValue={"Bangladesh"}
								/>
							</div>
						</div>
						<div className="md:flex gap-2">
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="dob">Date of Birth:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="date"
									id="dob"
									defaultValue="2024-04-05"
								/>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="nid">NID:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="number"
									id="nid"
									placeholder="842 55 636"
									defaultValue={"842 55 636"}
								/>
							</div>
						</div>
						<div className="md:flex gap-2">
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="blood ">Blood Group:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="text"
									id="blood"
									placeholder="AB+"
									defaultValue={"AB+"}
								/>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<label htmlFor="gender">Gender:</label>
								<Input
									className="rounded-full p-2 pl-5 bg-[#eaeafb]"
									type="text"
									id="gender"
									placeholder="Male"
									defaultValue={"Male"}
								/>
							</div>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<label htmlFor="present-address">Present Address:</label>
							<Input
								className="rounded-full p-2 pl-5 bg-[#eaeafb]"
								type="text"
								id="present-address"
								placeholder="Uttara, Sector 99, H-99"
								defaultValue={"Uttara, Sector 99, H-99"}
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<label htmlFor="Permanent-Address">Permanent Address:</label>
							<Input
								className="rounded-full p-2 pl-5 bg-[#eaeafb]"
								type="text"
								id="Permanent-Address"
								placeholder="Uttara, Sector 99, H-99"
								defaultValue={"Uttara, Sector 99, H-99"}
							/>
						</div>

						<div className="flex justify-between items-center py-4">
							<p className="text-gray-400 text-sm font-normal">
								if you change your Profile, then Press Save Changes
							</p>
							<Button className="bg-[#191661] hover:shadow-2xl hover:text-yellow-500 hover:bg-[#191661] rounded-full py-2 text-white">
								Save Changes
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
