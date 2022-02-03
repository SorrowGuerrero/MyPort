import LocalStorage from "lib/LocalStorage";
import { useEffect, useState } from "react";

const colorSchemes = {
	light: "light",
	dark: "dark",
};

/**
 * This hook manages color schemes
 * @param {string} defaultColorScheme default color scheme ("light","dark").
 * @param {function} callback function to run when colorScheme changes
 * @param {boolean} setLocally should store color scheme in local storage.
 * @returns {array} an array containing current colorScheme and toggle function
 */
export default function useColorScheme(
	defaultColorScheme,
	callback = () => {},
	setLocally = false
) {
	const [ColorScheme, setColorScheme] = useState("");
	const localStorage = new LocalStorage(setLocally);

	useEffect(() => {
		const localColorScheme = localStorage.colorScheme;

		if (localColorScheme && isColorSchemeValid(localColorScheme)) {
			setColorScheme(localColorScheme);
		} else if (isColorSchemeValid(defaultColorScheme)) {
			setColorScheme(defaultColorScheme);
		} else {
			// check system color scheme
			const matchMediaColorScheme = window.matchMedia(
				"(prefers-color-scheme: dark)"
			);

			const handleColorScheme = (event) => {
				setColorScheme(event?.matches ? colorSchemes.dark : colorSchemes.light);
			};

			// change color scheme as per system
			handleColorScheme(matchMediaColorScheme);
			matchMediaColorScheme.addEventListener("change", handleColorScheme);

			return () => {
				matchMediaColorScheme.removeEventListener("change", handleColorScheme);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultColorScheme]);

	useEffect(() => {
		if (ColorScheme !== "") {
			callback(ColorScheme);
		}
	}, [ColorScheme, callback]);

	function toggleColorScheme() {
		setColorScheme((prev) => {
			const oppositeColorScheme = getOppositeColorScheme(prev);
			localStorage.colorScheme = oppositeColorScheme;
			return oppositeColorScheme;
		});
	}

	return [ColorScheme, toggleColorScheme];
}

// get opposite color scheme
function getOppositeColorScheme(colorScheme) {
	return colorScheme === colorSchemes.light
		? colorSchemes.dark
		: colorSchemes.light;
}

// check if the color scheme is valid or not
function isColorSchemeValid(colorScheme) {
	const isString = (input) => typeof input === "string";
	const isAvailable = (input) => Object.keys(colorSchemes).includes(input);

	return isString(colorScheme) && isAvailable(colorScheme);
}
