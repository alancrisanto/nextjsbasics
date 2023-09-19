import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/button";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Diseños para tus Productos Digitales</h1>
				<p className={styles.desc}>
					Convirtiendo tu idea en realidad. Reunimos a los equipos de la industria tecnológica global{" "}
				</p>
				<Button url="/portfolio" text="Ve nuestros Proyectos" />
			</div>
			<div className={styles.item}>
				<Image src={Hero} alt="" className={styles.img} />
			</div>
		</div>
	);
}
