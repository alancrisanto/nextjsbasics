import Link from "next/link";
import sytles from "./button.module.css";

const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<button className={sytles.container}>{text}</button>
		</Link>
	);
};

export default Button;
