import { useEffect } from "react";

/**
 * Sets true 1% vh for mobile and other devices
 */
export default function TrueHeight(props) {
	/* 	
		- - - Use - - -
		
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
	 */

	function setWindowHeight() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}

	useEffect(() => {
		setWindowHeight();
		window.addEventListener("resize", setWindowHeight);

		return () => {
			window.removeEventListener("resize", setWindowHeight);
		};
	}, []);

	return <>{props.children}</>;
}
