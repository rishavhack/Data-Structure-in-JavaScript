class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.rigth = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}
	insert(value){
		let newNode = new Node(value);
		if(!this.root){
			this.root = newNode
			return this
		}
		var current = this.root
		while(true){
			if(value == current.value){
				return undefined
			}
			if(value < current.value){
				if(current.left == null){
					current.left = newNode
					return this
				}
				current = current.left
			}else{
				if(current.rigth == null){
					current.rigth = newNode
					return this
				}
				current = current.rigth
			}
		}
	}
	find(value){
		if(this.root == null){
			return false
		}
		var current = this.root
		var found = false
		while(current && !found){
			if(value < current.value){
				current = current.left
			}else if(value > current.value){
				current = current.rigth
			}else{
				found = true
			}
		}
		if(!found){
			return null
		}
		return current
	}
}






