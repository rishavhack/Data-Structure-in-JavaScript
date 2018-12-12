class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	insert(value){
		var newNode = new Node(value);
		if(!this.root){
			this.root = newNode;
		}else{
			var current = this.root
			while(true){
				if(value == current.value) {
					return undefined
				}
				if(value < current.value){
					if(current.left == null){
						current.left = newNode
						return this
					}
					current = current.left
				}else{
					if(current.right == null){
						current.right = newNode;
						return this
					}
					current = current.right
				}
			}
		}
	}
	find(value){
		var current = this.root;
		var found = false;
		while(current && !found){
			if(value < current.value){
				current = current.left
			}else if(value > current.value){
				current = current.right
			}else{
				found = true;
			}
		}
		if(!found){
			return false
		}
		return current
	}
	BFS(){
		var current = this.root;
		var data = [];
		var queue = [];
		queue.push(current);
		while(queue.length){
			current = queue.shift();
			data.push(current.value);
			if(current.left){
				queue.push(current.left)
			}
			if(current.right){
				queue.push(current.right)
			}
		}
		return data;
	}



}