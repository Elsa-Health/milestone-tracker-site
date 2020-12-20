import React from "react";

interface CardProps {
	containerClassName?: string;
}

const Card: React.FC<CardProps> = ({ children, containerClassName }) => (
	<div
		className={`bg-white overflow-hidden shadow rounded-lg ${containerClassName}`}
	>
		<div className="px-4 py-5 sm:p-6">{children}</div>
	</div>
);

export default Card;
