import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
// Video 1.25.12
const Blog = () => {
	return (
		<div className={styles.container}>
			<Link href="#" className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src="" alt="" width={400} height={250} className={styles.image} />
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}></h1>
					<p className={styles.desc}></p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
