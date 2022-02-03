import {
	appDescription,
	appName,
	appPreviewImage,
	appType,
	appURL,
} from "@/utils/appData";

export default function MetaTags({
	title = appName,
	description = appDescription,
	url = appURL,
	type = appType,
	image = appPreviewImage,
}) {
	return (
		<>
			<meta name="description" content={description} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:alt" content={title} />

			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
			<meta property="twitter:image:alt" content={title} />
			<meta property="twitter:site" content={url} />
		</>
	);
}
