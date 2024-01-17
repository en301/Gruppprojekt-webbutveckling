export const openModal = (img) => {
	//Malte
	const planets = {
		//Eftersom att jag inte har en databas måste jag tyvärr spara all text lokalt på detta vis, ser inte snyggt ut, men funkar.
		earth: [
			"Jorden",
			"Jorden är vår hemplanet och den enda kända planeten där liv existerar. Den har en diversifierad miljö med kontinenter, hav och en atmosfär som stöder liv. Jorden roterar vilket ger dag och natt, och dess måne, Månen, påverkar tidvattnet på planetens hav.",
		],
		jupiter: [
			"Jupiter",
			"Jupiter är solsystemets största planet och har en imponerande storm, den stora röda fläcken, som pågått i hundratals år. Den består huvudsakligen av väte och helium och har ett kraftigt magnetfält. Jupiter har också ett antal månar, varav de fyra största kallas Galileiska månarna: Io, Europa, Ganymedes och Callisto.",
		],
		mars: [
			"Mars",
			"Mars, den fjärde planeten från solen, har en rödaktig yta på grund av järnoxid eller rost. Den har imponerande geologiska formationer, inklusive den största vulkanen och den djupaste ravinen i solsystemet. Forskning tyder på att Mars tidigare hade flytande vatten på ytan, vilket har ökat intresset för möjligheten till tidigare eller nuvarande liv på planeten.",
		],
		mercury: [
			"Merkurius",
			"Merkurius är den innersta planeten i solsystemet och kännetecknas av extrema temperaturskillnader, med extrem hetta på dagen och kyla på natten. Dess yta är täckt av kratrar och klyftor, och den saknar en atmosfär som skyddar mot solens intensiva strålning.",
		],
		neptune: [
			"Neptunus",
			"Neptunus är den yttersta planeten i solsystemet och har en intensiv blå färg på grund av metan i atmosfären. Den har också starka vindar och stormar, inklusive en stor storm som liknar den stora röda fläcken på Jupiter. Neptunus har flera månar, varav Triton är den största och enda retrograda månen i solsystemet.",
		],
		saturn: [
			"Saturnus",
			"Saturnus är känd för sina imponerande ringar, som består av ispartiklar och klippblock. Dessa ringar sträcker sig långt ut från planeten och är synliga genom ett teleskop. Saturnus har också en mångfald av månar, varav Titan är den största och har en tjock atmosfär.",
		],
		uranus: [
			"Uranus",
			"Uranus ligger på sin sida när den roterar, vilket ger den dess unika rotationsaxel. Den har en blågrön färg på grund av metan i dess atmosfär. Uranus har också ringar, men de är svåra att observera från jorden.",
		],
		venus: [
			"Venus",
			"Venus är solsystemets hetaste planet på grund av dess tjocka atmosfär som fångar in och håller värme. Planeten roterar i motsatt riktning jämfört med de flesta andra planeter, och dess yta präglas av vulkaniska berg och stora lavaflöden. Venus har också ett tjockt molntäcke som består av svavelsyra.",
		],
	};

	const modal = document.querySelector(".modal"); //Här tar jag modal klassen från sidan
	const src = img.target.src; //Här läser jag av bildens filnamn
	const filename = src.substring(src.lastIndexOf("/") + 1); // Har tar jag bort källan till bilden, dvs ./img/planet.png till planet.png
	const planetNameEnglish = filename.replace(".png", ""); //Här tar jag bort .png för att bara lämna bildens namn
	const planetNameSwedish = planets[planetNameEnglish][0]; //Har tar jag data från objektet med all planet information
	const planetFacts = planets[planetNameEnglish][1]; //hör jag jag samma sak, fast istället för titel tar jag faktan

	const modalTitle = document.querySelector(".modalTitle"); //Här tar jag alla placeholder grejer från modaln så att jag kan ändra dem
	const modalDescription = document.querySelector(".modalDescription");
	const modalImage = document.querySelector(".modalImage");

	modalTitle.textContent = `${planetNameSwedish}`; //Här ändrar jag placeholder texten till den rätta texten
	modalDescription.textContent = planetFacts;
	modalImage.src = `../img/${filename}`;

	modal.style.display = "grid"; //Eftersom att jag använder en grid i elementet måste jag manuellt ändra den från display:none till display:grid
	modal.showModal(); //Detta är en inbyggd funktion till <dialog>
	modal.focus(); // Tar bort en skum highlighting grej
};

export const closeModal = () => {
	const modal = document.querySelector(".modal"); // jag vill inte kommentera här.
	modal.style.display = "none"; //Eftersom att jag använder en grid i elementet måste jag manuellt ändra display till none
	modal.close(); //Detta är en inbyggd funktion till <dialog>
};
