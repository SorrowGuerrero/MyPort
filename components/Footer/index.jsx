import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import ArrowDark from "./assets/arrow-dark.svg";
import ArrowLight from "./assets/arrow-light.svg";
import CustomImage from "../CustomImage";

export default function Footer(props) {
	return (
		<footer className={styles.app_footer}>
			<div className={styles.container}>
				<ContactSection email={props.email} theme={props.theme} />
				<InfoSection info={props.info} theme={props.theme} />
			</div>
		</footer>
	);
}

function ContactSection({ email, theme }) {
	return (
		<section className={styles.contact}>
			<h1>Have a great idea?</h1>

			<button className={styles.contact_button}>
				<Link href={`mailto:${email}`}>
					<a target="_blank" rel="noopener noreferrer">
						<p className={styles.text}>Let&apos;s work together</p>
						<CustomImage
							src={theme !== "light" ? ArrowDark : ArrowLight}
							alt="arrow"
							layout="fill"
							style={styles.arrow_icon}
						/>
					</a>
				</Link>
			</button>
		</section>
	);
}

function InfoSection({ info, theme }) {
	return (
		<section className={styles.info}>
			<main className={styles.info_container}>
				{info.map((infoItem, i) => (
					<article key={i} className={styles.info_item}>
						<h2>{infoItem.name}</h2>

						<section className={styles.items}>
							{
								<ul
									className={`${styles.items_container} ${
										styles[infoItem.type]
									}`}
								>
									{infoItem.contents.map((content, j) => {
										if (infoItem?.type === "copy")
											return <CopyText key={j} {...{ theme, content }} />;
										else if (infoItem?.type === "link")
											return <LinkText key={j} content={content} />;
										else return <p key={j}>{content}</p>;
									})}
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

function CopyText({ content, theme }) {
	const [copy, setCopy] = useState(false);

	useEffect(() => {
		if (copy) {
			navigator.clipboard.writeText(content.value);
			setCopy(false);
		}
	}, [copy, content]);

	function handleCopy(text) {
		setCopy(true);
	}

	return (
		<div className={styles.copy_container} onClick={handleCopy}>
			<p>{`${content.name} - ${content.value}`}</p>
		</div>
	);
}
