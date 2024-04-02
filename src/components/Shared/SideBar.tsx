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

const SideBar = () => {
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
			path: "/my-profile",
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
		<div className=" w-60 min-h-screen bg-[#fefefe] rounded-3xl shadow-xl ">
			{/* Profile Image  */}
			<div className="">
				<Image
					className="rounded-full mx-auto mt-8 bg-[#dfc19c] p-2"
					src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"
					alt=""
					width={200}
					height={200}
				/>
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
						<Link className="" key={i} href={item.path}>
							<li className="flex bg-slate-200 p-3 w-full items-center gap-3 px-4">
								<Image src={item.menuIcon} alt="" width={16} />
								<h4 className="text-sm font-light">{item.menuLabel}</h4>
							</li>
						</Link>
					))}
				</ul>
				{/* Profile menu  */}
				<ul className="flex flex-col gap-1 my-6">
					{profileMenu.map((item, i) => (
						<Link className="" key={i} href={item.path}>
							<li className="flex bg-slate-200 p-3 w-full items-center gap-3 px-4">
								<Image src={item.menuIcon} alt="" width={16} />
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
