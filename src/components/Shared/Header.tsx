import logo from "@/assests/Logo/assestment-logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
	const menuData = [
		{
			menuLabel: "Home",
			path: "/",
		},
		{
			menuLabel: "About",
			path: "/about",
		},
		{
			menuLabel: "Courses",
			path: "/courses",
		},
		{
			menuLabel: "Shop",
			path: "/shop",
		},
		{
			menuLabel: "Events",
			path: "/events",
		},
		{
			menuLabel: "Contact",
			path: "/contact",
		},
	];
	return (
		<header className="bg-[#26235B] pt-2 ">
			<nav className="container mx-auto">
				{/* Desktop Menu  */}

				<div className="flex items-center  justify-between">
					<Link href={"/"}>
						<Image className="rounded-2xl" src={logo} alt="logo" width={150} />
					</Link>

					{/* menu  */}

					<ul className="flex gap-6 text-white uppercase font-mono">
						{menuData.map((item, i) => (
							<Link key={i} href={item.path}>
								<li>{item.menuLabel}</li>
							</Link>
						))}
					</ul>

					{/* profile menu  */}

					<div className="flex items-center gap-3">
						<button className="text-white bg-gray-800 p-2 rounded-full">
							<CiSearch />
						</button>

						<Avatar>
							<AvatarImage src="https://i.ibb.co/SsTzDc9/Ellipse-16.png" />
							<AvatarFallback>AS</AvatarFallback>
						</Avatar>
					</div>
				</div>

				<h3 className="text-2xl uppercase text-center text-yellow-500 py-3 font-bold">
					Profile
				</h3>
				{/* Mobile Menu  */}
			</nav>
		</header>
	);
};

export default Header;
