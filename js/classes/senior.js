class Senior {
	constructor(state, cycles) {
		this.alive = state;
		this.color = "red";
		this.cyclesLiving = cycles;
	}

	rules(neighbors) {
		let state = this.alive;

		// console.log(state);
		let newState;
		if ((!state && neighbors == 3) || neighbors >= 5) {
			newState = true;
		} else if (state && (neighbors < 1 || neighbors > 2)) {
			newState = false;
		} else {
			newState = state;
			this.cyclesLiving++;
		}

		if (newState == state) {
			// let newAge = this.cyclesLiving + 1;
			if (this.cyclesLiving < 200) {
				return new Senior(newState, this.cyclesLiving);
			} else {
				return new Spirit(newState, this.cyclesLiving);
			}
		} else {
			return new Conway(newState, 0);
		}
		// console.log(neighbors);

		// console.log(state);
		// return newState;
	}
}
