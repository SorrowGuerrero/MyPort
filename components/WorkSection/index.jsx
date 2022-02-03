import ActivityCard from "../ActivityCard";
import styles from "./styles.module.scss";

export default function WorkSection({ workExperience }) {
	return (
		<section className={styles.work_section}>
			<div className={styles.container}>
				<section className={styles.indicator}>
					<p>Work</p>
					<div className={styles.vertical_bar}></div>
				</section>

				<main className={styles.work} id="work">
					{workExperience.map((experience, i) => (
						<ActivityCard {...experience} key={i} />
					))}
				</main>
			</div>
		</section>
	);
}
