import Link from "next/link";
import styles from "./styles.module.scss";

/**
 * @param {string} about
 * @param {object} intro
 */
export default function FrontFace({ about, intro, ...props }) {
	return (
		<article className={styles.front_face}>
			<main className={styles.container}>
				<h1 id="about" dangerouslySetInnerHTML={{ __html: about }}></h1>
				<IntroSection intro={intro} />
			</main>
		</article>
	);
}

function IntroSection({ intro }) {
	return (
		<section className={styles.quick_intro}>
			<main className={styles.quick_intro_container}>
				{intro.map((introItem, i) => (
					<article key={i} className={styles.intro_item}>
						<h2>{introItem.name}</h2>

						<section className={styles.items}>
							{
								<ul
									className={`${styles.items_container} ${
										styles[introItem.type]
									}`}
								>
									{introItem.contents.map((content, j) =>
										introItem?.type === "link" ? (
											<LinkText key={j} content={content} />
										) : (
											<p key={j}>{content}</p>
										)
									)}
								</ul>
							}
						</section>
					</article>
				))}
			</main>
		</section>
	);
}

function LinkText({ content }) {
	return (
		<Link href={content.link}>
			<a target="_blank" rel="noopener noreferrer">
				{content.name}
			</a>
		</Link>
	);
}
