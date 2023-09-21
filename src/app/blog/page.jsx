import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
// Video 1.25.12
const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link href="/blog/testId" className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src="https://picsum.photos/400" alt="photo picsum" width={400} height={250} className={styles.image} />
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam odio facilis quo explicabo ratione
						voluptate, tenetur et fuga non sint labore mollitia. Inventore ex quod, ipsum temporibus doloremque
						obcaecati?
					</p>
				</div>
			</Link>
			<Link href="/blog/testId" className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src="https://picsum.photos/400" alt="photo picsum" width={400} height={250} className={styles.image} />
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam odio facilis quo explicabo ratione
						voluptate, tenetur et fuga non sint labore mollitia. Inventore ex quod, ipsum temporibus doloremque
						obcaecati?
					</p>
				</div>
			</Link>
			<Link href="/blog/testId" className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src="https://picsum.photos/400" alt="photo picsum" width={400} height={250} className={styles.image} />
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam odio facilis quo explicabo ratione
						voluptate, tenetur et fuga non sint labore mollitia. Inventore ex quod, ipsum temporibus doloremque
						obcaecati?
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
