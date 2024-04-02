"use client";
import { useState } from "react";
import Certificates from "./Certificates";
import Competitions from "./Competitions";
import EditProfile from "./EditProfile";

export default function Profile() {
	const [tabActive, setMenuActive] = useState("edit-profile");
	return (
		<div className=" bg-[#fefefe] rounded-3xl shadow-xl  w-full">
			{/* profile header  */}
			<div className="p-5">
				<h3 className="text-2xl font-bold text-blue-900">MY PROFILE</h3>

				{/* profile menu tab  */}
				<ul className="flex gap-8 items-center py-4">
					<li className="cursor-pointer">
						<button
							onClick={() => setMenuActive("edit-profile")}
							className={`${
								tabActive === "edit-profile"
									? "inline-block pb-2 border-b-2 border-transparent border-yellow-500"
									: "inline-block pb-2 border-b-2 border-transparent hover:border-yellow-500"
							}`}
						>
							Edit Profile
						</button>
					</li>
					<li className="cursor-pointer">
						<button
							onClick={() => setMenuActive("certificate")}
							className={`${
								tabActive === "certificate"
									? "inline-block pb-2 border-b-2 border-transparent border-yellow-500"
									: "inline-block pb-2 border-b-2 border-transparent hover:border-yellow-500"
							}`}
						>
							Certificates
						</button>
					</li>
					<li className="cursor-pointer">
						<button
							onClick={() => setMenuActive("competitions")}
							className={`${
								tabActive === "competitions"
									? "inline-block pb-2 border-b-2 border-transparent border-yellow-500"
									: "inline-block pb-2 border-b-2 border-transparent hover:border-yellow-500"
							}`}
						>
							Competitions
						</button>
					</li>
				</ul>
			</div>

			{/* profile container  */}

			<div className="p-5">
				{tabActive === "edit-profile" && <EditProfile />}
				{tabActive === "certificate" && <Certificates />}
				{tabActive === "competitions" && <Competitions />}
			</div>
		</div>
	);
}
