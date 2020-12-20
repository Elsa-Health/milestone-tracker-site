import React from "react";

interface ButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
	text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
	return (
		<button
			onClick={onClick}
			data-testid="button"
			className="bg-elsa-blue px-10 md:px-20 py-3 md:py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
		>
			{text}
		</button>
	);
};

export default Button;
