import { //Malte
	openModal,
	closeModal,
} from "./modal.js"; /*Jag personligen älskar att organisera min kod i olika filer, jag tycker att det gör det 1000 gånger lättare att jobba på saker
när allting är uppdelat i olika filer, speciellt i större projekt (och jag är fullt medveten om att jag lätt hade kunnat klara mig på en JS fil, men tycker att detta ser mycket bättre ut)
*/

document.addEventListener("DOMContentLoaded", function () {
	//Detta ser till att koden endast körs när alla html element är färdigladdade.
	let images = Array.from(
		document.querySelectorAll("img")
	); /*Vad jag gör här är att jag tar alla bilder från sidan, sedan konverterar jag dem från en nodelist till en array så att jag sedan 
	kan använda array metoden shift() & pop() vilket tillåter mig att ta bort det första elementet och sista. Anledningen till varför jag vill göra detta är eftersom att första bilden sitter i
	nav-bar och hade då öppnat en modal för jorden, och pop() användes så att man inte hade kunnat öppna ännu en modal med hjälp av planet bilden i modaln.*/
	images.shift();
	images.pop();
	const modal = document.querySelector(".modal");

	document.addEventListener("click", () => {
		//Allt denna gör är att stänga ned modaln ifall användaren klickar någonstans medan modaln är öppen
		if (modal.open) {
			closeModal();
		}
	});

	images.forEach((image) => {
		//Eftersom att images är en array kan jag göra ett forEach loop för att skapa en individuell eventListener för varje bild
		image.addEventListener("click", (event) => {
			openModal(event);
			event.stopPropagation(); // Detta ser till så att modaln inte automatisk stängs av.
		});
	});
});
