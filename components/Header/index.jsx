import Link from "next/link";
import styles from "./styles.module.scss";

/**
 * @param {string} logoName
 * @param {object} navItem
 */
export default function Header({ logoName, navItems, ...props }) {
	return (
		<header className={styles.app_header}>
			<div className={styles.container}>
				<main className={styles.logo}>
					<Link href="/">
						<a>{logoName}</a>
					</Link>
				</main>

				<nav className={styles.navbar}>
					<ul className={styles.container}>
						{navItems.map((navItem, i) => (
							<li key={i} className={styles.nav_item}>
								<Link href={navItem.link}>
									<a>{navItem.name}</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
