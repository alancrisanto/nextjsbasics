import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src="https://images.pexels.com/photos/17767961/pexels-photo-17767961/free-photo-of-blanco-y-negro-naturaleza-rocas-bosque.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="another image"
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>Handcrafting award winning digital experiencies</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Quienes Somos</h1>
					<p className={styles.desc}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas commodi est tempore placeat, illum rerum
						minima voluptatem fugiat totam soluta laborum illo aliquam sit ipsum quaerat asperiores at hic. Earum!{" "}
						<br />
						Suscipit distinctio veritatis deleniti velit magnam voluptatem at voluptatum recusandae optio sed porro
						alias odit ipsum nihil illum doloribus dolorem inventore consequatur expedita minus, accusantium fugiat eum
						obcaecati enim. Optio.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>Qué Hacemos</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tenetur, natus ex illo voluptatem numquam
						quos? Fugiat nobis, sunt nisi dignissimos quas quasi! Officia modi magnam, nihil voluptas totam quae. <br />
						Unde perspiciatis necessitatibus ex sapiente, quae eum facere possimus modi officia minus pariatur nihil
						dolorum repudiandae odit maxime harum. Eveniet distinctio eaque ipsam nisi, voluptatibus quasi veritatis
						placeat impedit molestias. <br />
						Tenetur quas laborum doloribus ratione eum fuga architecto voluptatem totam hic dolores quasi molestiae
						ducimus ex perspiciatis vero aperiam expedita, quia odit sint minima adipisci provident! Aperiam odio unde
						nemo.
					</p>
					<Button url="contact" text="contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
