import Link from "next/link";
import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";

export default function ActivityCard({ infoData, image, link = "", ...props }) {
	const keys = Object.keys(infoData);

	return (
		<section className={styles.activityCard}>
			<main className={styles.container}>
				<section className={styles.info}>
					<main className={styles.info_container}>
						{keys.map((item, i) => (
							<section key={i} className={styles.infoItem}>
								<h2>{item}</h2>

								<section className={styles.items}>
									<ul className={styles.items_container}>
										{infoData[item].map((content, j) => (
											<p key={j}>{content}</p>
										))}
									</ul>
								</section>
							</section>
						))}
					</main>
				</section>

				{link !== "" ? (
					<Link href={link}>
						<a
							className={styles.image}
							target="_blank"
							rel="noopener noreferrer"
						>
							<CustomImage
								{...image}
								layout="fill"
								objectFit="cover"
								style={styles.image_container}
							/>
						</a>
					</Link>
				) : (
					<div className={styles.image}>
						<CustomImage
							{...image}
							layout="fill"
							objectFit="cover"
							style={styles.image_container}
						/>
					</div>
				)}
			</main>
		</section>
	);
}
