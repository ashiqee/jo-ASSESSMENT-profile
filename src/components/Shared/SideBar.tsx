"use client";
import profileImg from "@/assests/Images/Ellipse 16.png";
import cerIcon from "@/assests/Logo/SVG/c.svg";
import ybIcon from "@/assests/icon/Group 162.png";
import bellIcon from "@/assests/icon/bell.png";
import videos from "@/assests/icon/cloud-computing.png";
import karateIcon from "@/assests/icon/education.png";
import equipmentIcon from "@/assests/icon/gym-station.png";
import favoriteIcon from "@/assests/icon/like.png";
import signOutIcon from "@/assests/icon/log-out.png";
import paymentIcon from "@/assests/icon/payment.png";
import onlineCourseIcon from "@/assests/icon/running.png";
import settingIcon from "@/assests/icon/settings.png";
import profileIcon from "@/assests/icon/user.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
	const pathName = usePathname();

	const courseMenu = [
		{
			menuLabel: "Karate Course",
			menuIcon: karateIcon,
			path: "/karate-course",
		},
		{
			menuLabel: "Online Courses",
			menuIcon: onlineCourseIcon,
			path: "/online-courses",
		},
		{
			menuLabel: "Videos",
			menuIcon: videos,
			path: "/videos",
		},
		{
			menuLabel: "Equipments",
			menuIcon: equipmentIcon,
			path: "/equipments",
		},
		{
			menuLabel: "Competition",
			menuIcon: onlineCourseIcon,
			path: "/competition",
		},
	];
	const profileMenu = [
		{
			menuLabel: "Your Favorite",
			menuIcon: favoriteIcon,
			path: "#",
		},
		{
			menuLabel: "Notification",
			menuIcon: bellIcon,
			path: "#",
		},
		{
			menuLabel: "My Profile",
			menuIcon: profileIcon,
			path: "/profile",
		},
		{
			menuLabel: "Payment Method",
			menuIcon: paymentIcon,
			path: "#",
		},
		{
			menuLabel: "Setting",
			menuIcon: settingIcon,
			path: "#",
		},
		{
			menuLabel: "Sign Out",
			menuIcon: signOutIcon,
			path: "#",
		},
	];

	return (
		<div className=" min-w-60  bg-[#fefefe] rounded-3xl shadow-xl ">
			{/* Profile Image  */}
			<div className="rounded-full w-44 p-[4px] mx-auto bg-yellow-500 shadow-2xl hover:shadow-blue-950  mt-6">
				<div className="rounded-full shadow-xl w-40 mx-auto bg-slate-300 p-[4px]">
					<Image
						className="rounded-full mx-auto  bg-[#edeae7] p-[3px]"
						src={profileImg}
						alt=""
						width={200}
						height={200}
					/>
					<div className="relative -top-10">
						<Image
							className="absolute right-0"
							src={ybIcon}
							alt=""
							width={33}
							height={33}
						/>
						<Image
							className="absolute left-0"
							src={cerIcon}
							alt=""
							width={33}
							height={33}
						/>
					</div>
				</div>
			</div>

			{/* Assessment info  */}
			<div className="text-center text-primary space-y-3 py-4">
				<h3 className="font-md text-xl">Assessment Username</h3>
				<p className="font-light">Batch no : KC22041</p>
				<p className="font-light"> Roll no: OKC1122334 </p>
			</div>

			{/* sideBar Menu  */}
			<div>
				{/* course menu  */}
				<ul className="flex flex-col gap-1 mt-2">
					{courseMenu.map((item, i) => (
						<Link className="hover:text-white" key={i} href={item.path}>
							<li
								className={`${
									pathName === item.path
										? " flex text-white  bg-[#191661] p-3 w-full items-center gap-3 px-4"
										: "flex bg-[#eaeafb]   hover:bg-[#191661] p-3 w-full items-center gap-3 px-4"
								}`}
							>
								<Image
									className={`${
										pathName === item.path
											? "filter-invert"
											: "hover:filter-invert"
									} `}
									src={item.menuIcon}
									alt=""
									width={16}
								/>

								<h4 className="text-sm font-light">{item.menuLabel}</h4>
							</li>
						</Link>
					))}
				</ul>
				{/* Profile menu  */}
				<ul className="flex flex-col gap-1 my-6">
					{profileMenu.map((item, i) => (
						<Link className="hover:text-white" key={i} href={item.path}>
							<li
								className={`${
									pathName === item.path
										? " flex text-white  bg-[#191661] p-3 w-full items-center gap-3 px-4"
										: "flex bg-[#eaeafb]  hover:bg-[#191661] p-3 w-full items-center gap-3 px-4"
								}`}
							>
								<Image
									className={`${
										pathName === item.path
											? "filter-invert"
											: "hover:filter-invert"
									} `}
									src={item.menuIcon}
									alt=""
									width={16}
								/>

								<h4 className="text-sm font-light">{item.menuLabel}</h4>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
