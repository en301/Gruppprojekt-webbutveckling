export const modal = (img) => {
	const src = img.target.src;
	const planetName = src.substring(src.lastIndexOf("/") + 1);

	console.log(planetName);
};
