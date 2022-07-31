const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const context = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const width = rect.width;
const height = rect.height;

const resolution = 200;
const pixel = width / resolution;

const prob = 3;

let mouseX, mouseY, mouseDown;
let paused = false;

let grid;

function create2DArray() {
	let rows = new Array(resolution);

	for (let i = 0; i < resolution; i++) {
		rows[i] = new Array(resolution);
	}
	return rows;
}

function setup() {
	grid = create2DArray();

	for (let i = 0; i < resolution; i++) {
		for (let j = 0; j < resolution; j++) {
			grid[i][j] = getRandomCell(i, j, prob);
		}
	}
}

function clearGrid() {
	grid = create2DArray();

	for (let i = 0; i < resolution; i++) {
		for (let j = 0; j < resolution; j++) {
			grid[i][j] = new Conway(false, 0);
		}
	}
}

function getRandomCell(x, y, per) {
	let state = Math.random() * 100 < per ? true : false;

	return new Conway(state, 0);
}

function countLiveNeighbors(grid, x, y) {
	let sum = 0;

	// console.table(grid);
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			// console.log("hello");
			if (
				i + x > 0 &&
				i + x < resolution - 1 &&
				j + y > 0 &&
				j + y < resolution - 1
			) {
				if (grid[i + x][j + y].alive) {
					sum++;
				}
			}
		}
	}
	if (grid[x][y].alive) {
		sum -= 1;
	}

	return sum;
}

function show() {
	context.fillStyle = "rgb(0,0,0,1)";

	context.fillRect(0, 0, width, height);
	let next = create2DArray();

	if (mouseX && mouseY) {
		if (
			mouseX > 0 &&
			mouseX < resolution &&
			mouseY > 0 &&
			mouseY < resolution
		) {
			grid[mouseX][mouseY] = new Conway(mouseDown, 0);
		}
		// console.log(mouseX);
	}

	for (let i = 0; i < resolution; i++) {
		for (let j = 0; j < resolution; j++) {
			if (grid[i][j].alive) {
				context.fillStyle = grid[i][j].color;
			} else {
				context.fillStyle = "transparent";
			}
			context.fillRect(i * pixel, j * pixel, pixel, pixel);
		}
	}
	if (!paused) {
		for (let i = 0; i < resolution; i++) {
			for (let j = 0; j < resolution; j++) {
				let neighbors = this.countLiveNeighbors(grid, i, j);
				// console.log(neighbors);
				let cell = grid[i][j];
				let newCell = cell.rules(neighbors);
				next[i][j] = newCell;
				// console.log(alive);
			}
		}

		// console.table(next);
		grid = next;
	}
	//Compute next grid based on cell rules

	// console.table(grid);
}

setup(10);
show();
setInterval(show, 1000 / 60);

canvas.addEventListener("mousemove", (e) => {
	mouseX = Math.floor(e.offsetX / pixel);
	mouseY = Math.floor(e.offsetY / pixel);
});

canvas.addEventListener("mousedown", () => {
	mouseDown = true;
});

canvas.addEventListener("mouseup", () => {
	mouseDown = false;
});

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "p":
			if (paused) {
				paused = false;
			} else {
				paused = true;
			}
			break;
		case "Backspace":
			clearGrid();
			break;
		case "r" || "R":
			setup();
	}
});
