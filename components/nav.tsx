import Link from "next/link";

const links = [{ href: "https://elsa.health", label: "About Elsa" }];

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-between px-8 pt-4">
				<li className="mr-4">
					<Link href="/">
						<img
							src="/elsa-logo.png"
							className="w-44 md:w-72"
							alt="Elsa Health"
						/>
					</Link>
				</li>
				<ul className="items-center justify-between space-x-4 hidden md:flex">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a
								href={href}
								target="_blank"
								className="no-underline px-3 py-3 hover:bg-blue-700 hover:text-white rounded-md"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				<ul className="flex items-center justify-between space-x-4 md:hidden">
					<li>
						<a
							href="https://elsa.health"
							target="_blank"
							className="no-underline px-3 py-3 rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6 w-6 text-gray-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</ul>
		</nav>
	);
}
