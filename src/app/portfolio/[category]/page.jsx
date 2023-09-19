import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";

const PortfolioCategory = ({ params }) => {
	console.log(params);
	return (
		<div className={styles.container}>
			<h3 className={styles.catTitle}>{params.category}</h3>
			<div className={styles.item}>
				<div className={styles.content}>
					<h2 className={styles.title}>Portfolio Description</h2>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero at quasi quod provident maxime. At
						reiciendis iure tempora voluptas sit, perferendis alias illum labore similique? Corporis pariatur harum
						ratione!
					</p>
					<Button text="Ver Más" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} fill={true} src="https://picsum.photos/600" alt="test img" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h2 className={styles.title}>Creative Portfolio</h2>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum laborum. Fugit laboriosam ipsa
						quas nostrum maxime distinctio quaerat voluptatem commodi consectetur illum corrupti voluptas totam
						repellendus pariatur, illo perspiciatis! Est, iure porro.
					</p>
					<Button text="Ver Más" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} fill={true} src="https://picsum.photos/600" alt="test img" />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h2 className={styles.title}>Portfolio Description</h2>
					<p className={styles.desc}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quisquam quod ipsum natus sequi
						impedit fuga ab ratione magni quam officia labore sunt sint quo commodi, voluptatem, corporis provident
						ullam!
					</p>
					<Button text="Ver Más" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} fill={true} src="https://picsum.photos/600" alt="test img" />
				</div>
			</div>
		</div>
	);
};

export default PortfolioCategory;
