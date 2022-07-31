class Spirit {
	constructor(state, cycles) {
		this.alive = state;
		this.color = "cyan";
		this.cyclesLiving = cycles;
	}

	rules(neighbors) {
		let state = this.alive;

		// console.log(state);
		let newState;
		if (!state && neighbors > 2 && neighbors <= 4) {
			newState = true;
		} else if (state && (neighbors < 1 || neighbors > 2)) {
			newState = false;
		} else {
			newState = state;
			this.cyclesLiving++;
		}

		if (newState == state) {
			// let newAge = this.cyclesLiving + 1;
			if (this.cyclesLiving < 500) {
				return new Spirit(newState, this.cyclesLiving);
			} else {
				return new Spirit(false, 0);
			}
		} else {
			return new Conway(newState, 0);
		}
		// console.log(neighbors);

		// console.log(state);
		// return newState;
	}
}
