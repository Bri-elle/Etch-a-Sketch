// create a 16 x 16 grid

// buttons

//set event listner on buttons to determine the last clicked
let buttons = document.querySelectorAll("button");
let lastClicked;
let container = document.querySelector(".container");
let opacityCount = 0.1;

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		lastClicked = event.target.id;
		console.log(lastClicked);
	});
});

/**
 *
 * @param {number} blockPerSide
 */
function gridMaker(blockPerSide = 16) {
	let totalGridBlock = blockPerSide * blockPerSide;
	container.innerHTML = "";

	const style = window.getComputedStyle(container);
	let size = parseFloat(style.width);
	if (!size) {
		console.error("Container width is not set or is invalid.");
		return;
	}

	let divWidth = size / blockPerSide;
	let divHeight = size / blockPerSide;

	for (let index = 0; index < totalGridBlock; index++) {
		let div = document.createElement("div");
		div.style.width = `${divWidth}px`;
		div.style.height = `${divHeight}px`;
		div.classList.add("pixel");

		div.addEventListener("mouseenter", (event) => {
			let cell = event.target;
			if (lastClicked == "coloredGrid") {
				cell.style.backgroundColor = randomColors();
			} else {
				cell.style.backgroundColor = "#575757";
			}
		});

		container.appendChild(div);
	}
}

gridMaker();

/**
 * Event Listener for Clear Button
 */
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

function clear() {
	let gridCells = document.querySelectorAll(".pixel");
	gridCells.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
}

/**
 * Event Listener to create new Grid
 */
let createNewGrid = document.querySelector("#createNewGrid");

createNewGrid.addEventListener("click", () => {
	let sides = prompt("Square per side(max is 100):");
	if (sides > 100) sides = 100;
	gridMaker(sides);
});

/**
 * Event Listener for  colored trail
 */
let coloredGrid = document.querySelector("#coloredGrid");
coloredGrid.addEventListener("click", clear);

/**
 * function generate random colors
 * @returns string
 */
function randomColors() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let randomColor = `rgb(${red}, ${green}, ${blue})`;
	return randomColor;
}

/**
 * Increase opacity
 */
// let blocks = document.querySelectorAll(".pixel");
// blocks.forEach((block) => {
// 	block.addEventListener("mouseover", (event) => {
// 		let cell = event.target;
// 		let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);

// 		if (currentOpacity < 1.0) {
// 			currentOpacity = currentOpacity + 0.1;
// 			cell.style.opacity = currentOpacity;
// 		}
// 	});
// });
