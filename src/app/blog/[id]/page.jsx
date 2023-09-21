import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo sit culpa ullam nulla, nostrum
						praesentium qui, neque, mollitia corporis est totam. Eum, dolorem ipsam. Exercitationem, accusamus sed!
						Doloremque, quasi! Soluta, placeat. Possimus officiis placeat nemo, doloribus exercitationem voluptate!
						Exercitationem, alias corrupti excepturi quo, ex omnis sunt eaque beatae cum quaerat molestias sit ut
						temporibus dolores sed suscipit quasi nihil!
					</p>
					<div className={styles.author}>
						<Image
							className={styles.avatr}
							src="https://picsum.photos/50"
							alt="image from picsum"
							width={50}
							height={50}
						/>
						<span className={styles.username}>John Doe</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="https://picsum.photos/600/300"
						alt="image from picsum"
						width={600}
						height={300}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.top}>
				<p className={styles.text}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatibus culpa vitae odit. Sapiente natus
					asperiores tempora amet architecto itaque, facilis illum temporibus rem vero praesentium? Sit vero fugit
					temporibus. Adipisci, ut. Distinctio quae debitis impedit rerum harum inventore atque quia sequi, nam delectus
					cupiditate unde corrupti dolorum fuga illum facilis ipsa itaque aut repellat vel maxime voluptatem eos
					architecto! Illum, quis ipsum! Debitis, voluptatem magni distinctio nemo laboriosam quod optio aliquam laborum
					non recusandae repudiandae quos assumenda eveniet nam vero ipsam. Architecto minus vel natus accusamus rem sit
					esse!
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
