export default class LocalStorage {
	static localColorSchemeVar = "color-scheme";
	static setLocally;

	constructor(setLocally) {
		this.setLocally = setLocally;
	}
	get colorScheme() {
		return (
			this.setLocally && window.localStorage.getItem(this.localColorSchemeVar)
		);
	}
	set colorScheme(colorScheme) {
		this.setLocally &&
			window.localStorage.setItem(this.localColorSchemeVar, colorScheme);
	}
}
