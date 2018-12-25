class MaxBinaryHeap{
	constructor(){
		this.value = []
	}
	insert(element){
		this.value.push(element);
		this.bubbleUp();
	}
	bubbleUp(){
		let idx = this.value.length - 1;
		const element = this.value[idx];
		while(idx > 0){
			let parentIdx = Math.floor((idx - 1)/2);
			let parent = this.value[parentIdx];
			if(element <= parent) break;
			this.value[parentIdx] = element;
			this.value[idx] = parent;
			idx = parentIdx;
		}
	}
}