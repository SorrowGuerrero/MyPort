import user from "../data";
import { colorThemes } from "./appData";

export const personalData = {
	name: user.name,
	email: user.email,
	title: `${user.name}'s Portfolio`,
};

export const header = {
	logoName: "HOME",
	navItems: [
		{
			name: "WORK",
			link: "/#work",
		},
		{
			name: "CONTACT",
			link: `mailto:${personalData.email}`,
		},
	],
};

export const front_face = {
	about: user.about,
	intro: [
		{
			name: user.accomplishments.name,
			type: "text",
			contents: user.accomplishments.value,
		},
		{
			name: user.socialLink.name,
			type: "link",
			contents: user.socialLink.value,
		},
		{
			name: user.currentProfession.name,
			type: "text",
			contents: user.currentProfession.value,
		},
	],
};

// sample workExperience
// [{
// 	infoData: {
// 		Company: ["Apple"],
// 		Description: [
// 			"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
// 		],
// 		"My Objectives": ["User Testing", "Accessibility improvements"],
// 	},

// 	link: "/",
// 	image: {
// 		src: "/images/apple.png",
// 		alt: "osenorth",
// 	},
// },]

export const workExperience = user.workExperience.map((experience) => ({
	infoData: experience.info,
	link: experience?.link ?? "",
	image: {
		src: experience.image,
		alt: experience.company,
	},
}));

export const footerInfoData = [
	{
		name: user.contactDetails.name,
		type: "copy",
		contents: user.contactDetails.value,
	},
	{
		name: user.socialLink.name,
		type: "link",
		contents: user.socialLink.value,
	},
	{
		name: user.currentStatus.name,
		type: "text",
		contents: user.currentStatus.value,
	},
];

export const theme =
	user?.theme === "auto" ? "" : user?.theme ?? colorThemes.light;
