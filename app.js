// create a 16 x 16 grid

function gridMaker(blockPerSide = 16) {
	totalGridBlock = blockPerSide * blockPerSide;
	let container = document.querySelector(".container");
	// container.style.width will not work because the container width was not set inline;
	const style = window.getComputedStyle(container);
	let size = style.width;
	// parseFloat removes px from the value returned
	size = parseFloat(size);
	// let size = 800;

	let divWidth = size / blockPerSide;
	let divHeight = size / blockPerSide;

	for (let index = 0; index < totalGridBlock; index++) {
		//create div element
		let div = document.createElement("div");
		//set width of div element
		div.style.width = `${divWidth}px`;
		//set height of div element
		div.style.height = `${divHeight}px`;
		//add class pixel to the div
		div.classList.add("pixel");
		// get container element and append div
		div.addEventListener("mouseenter", (event) => {
			let cell = event.target;
			cell.style.backgroundColor = "#575757";
		});
		container.appendChild(div);
	}
	// set event listener on the container, when a mouse enters a div area, change the background color
}

gridMaker();

/**
 * Event Listener for Clear Button
 */
let clearBtn = document.querySelector("#clear");
let gridCells = document.querySelectorAll(".pixel");

clearBtn.addEventListener("click", () => {
	gridCells.forEach((cell) => {
		cell.style.backgroundColor = "whitesmoke";
	});
});

/**
 * Event Listener for New Grid
 */
