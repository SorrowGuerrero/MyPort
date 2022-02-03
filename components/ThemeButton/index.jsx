import styles from "./styles.module.scss";

export default function ThemeButton({ colorTheme, toggleTheme }) {
	return (
		<button className={styles.theme_button} onClick={toggleTheme}>
			<p>/{colorTheme}</p>
		</button>
	);
}
