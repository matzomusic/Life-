class Conway {
	constructor(state, cycles) {
		this.alive = state;
		this.color = "white";
		this.cyclesLiving = cycles;
	}

	rules(neighbors) {
		let state = this.alive;

		// console.log(state);
		let newState;
		// let sum = 0;

		// console.log(neighbors);

		if (!state && neighbors == 3) {
			newState = true;
		} else if (state && (neighbors < 2 || neighbors > 3)) {
			newState = false;
		} else {
			this.cyclesLiving++;
			newState = state;
		}

		if (newState == state) {
			if (this.cyclesLiving < 50) {
				return new Conway(newState, this.cyclesLiving);
			} else {
				return new Mature(newState, this.cyclesLiving);
			}
		} else {
			return new Conway(newState, this.cyclesLiving);
		}
		// console.log(state);
		// return newState;
	}
}
