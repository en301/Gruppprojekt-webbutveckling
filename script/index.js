import { modal } from "./modal.js";

window.onload = () => {
	const images = document.querySelectorAll("img");

	images.forEach((image) => {
		image.addEventListener("click", modal);
	});
	//modal();
};
