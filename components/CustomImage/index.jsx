import Image from "next/image";

// src and alt destructed to prevent eslint warning
export default function CustomImage({ style, src, alt, ...imageProperties }) {
	return (
		<div className={style ?? null}>
			<Image src={src} alt={alt} {...imageProperties} />
		</div>
	);
}
