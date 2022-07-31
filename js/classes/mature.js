class Mature {
	constructor(state, cycles) {
		this.alive = state;
		this.color = "yellow";
		this.cyclesLiving = cycles;
	}

	rules(neighbors) {
		let state = this.alive;

		// console.log(state);
		let newState;
		if ((!state && neighbors == 3) || neighbors > 7) {
			newState = true;
		} else if (state && (neighbors < 2 || neighbors > 3)) {
			newState = false;
		} else {
			newState = state;
			this.cyclesLiving++;
		}

		if (newState == state) {
			if (this.cyclesLiving < 100) {
				return new Mature(newState, this.cyclesLiving);
			} else {
				return new Senior(newState, this.cyclesLiving);
			}
		} else {
			return new Conway(newState, 0);
		}
		// console.log(neighbors);

		// console.log(state);
		// return newState;
	}
}
