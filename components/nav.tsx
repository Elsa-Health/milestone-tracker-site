import Link from "next/link";
import Image from "next/image";

const links = [
	{ href: "https://elsa.health", label: "Contact" },
	{ href: "/", label: "En/Sw" },
];

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-between px-8">
				<li>
					<Link href="/">
						{/* <Image
							alt="Elsa Health"
							src="/elsa-logo.png"
							width={250}
							height={100}
						/> */}
						<img src="/elsa-logo.png" className="w-72" alt="Elsa Health" />
					</Link>
				</li>
				<ul className="flex items-center justify-between space-x-4">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className="no-underline px-3 py-3 hover:bg-blue-700 hover:text-white rounded-md">
								{label}
							</a>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	);
}
