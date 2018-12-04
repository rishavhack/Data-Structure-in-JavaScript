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
			this.root = newNode
			return undefined
		}else{
			var current = this.root
			while(true){
				if(value == current.value){
					return undefined
				}
				if(value < current.left){
					if(current.left == null){
						current.left = newNode
						return this
					}
					current = current.left
				}else{
					if(current.right == null){
						current.right = newNode
						return this
					}
					current = current.right
				}
			}
		}
	}
	find(value){
		if(!this.root){
			return undefined
		}
		var current = this.root;
		var found = false;
		while(current && !found){
			if(value < current.left){
				current = current.left
			}else if(value > current.right){
				current = current.right
			}else{
				found = true;
			}
		}
		if(!found){
			return undefined
		}
		return true
	}
	contain(value){
		if(!this.root){
			return undefined
		}
		var current = this.root;
		var found = false;
		while(current && !found){
			if(value < current.left){
				current = current.left
			}else if(value > current.right){
				current = current.right
			}else{
				return true;
			}
		}
		return false
	}
}