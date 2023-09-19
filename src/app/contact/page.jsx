import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const Contact = () => {
	return (
		<div className={styles.contact}>
			<h1 className={styles.title}>Contactanos</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image className={styles.image} src="/contact.png" fill={true} alt="another image" />
				</div>
				<form className={styles.form}>
					<input type="text" placeholder="name" className={styles.input} />
					<input type="text" placeholder="email" className={styles.input} />
					<textarea type="text" placeholder="name" className={styles.textArea} col="30" rows="10" />
					<Button url="#" text="Enviar" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
