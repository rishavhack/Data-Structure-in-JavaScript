class Node{
	constructor(value){
		this.value =value;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree{
	constructor(){
		this.root = null
	}
	insert(value){
		var newNode = new Node(value);
		if(!this.root){
			this.root = newNode
			return this
		}else{
			var current = this.root
			while(true){
				if(value == current.value){
					return undefined
				}
				if(value < current.value){
					if(current.left == null){
						current.left = newNode;
						return this
					}
					current = current.left;
				}else{
					if(current.right == null){
						current.right = newNode
						return this
					}
					current = current.right;
				}
			}
		}
	}
	find(value){
		if(!this.root){
			return undefined
		}
		var current. = this.root;
		var found = false;
		while(current && !found){
			if(value < current.value){
				current = current.left
			}else if(value > current.value){
				current = current.right
			}else{
				found = true
			}
		}
		if(!found){
			return undefined
		}
		return current
	}
	BFS(){
		var node = this.root;
		var data = [];
		var queue = [];
		queue.push(node);
		while(queue.length){
			node = queue.shift();
			data.push(node);//data.push(node.value) to see result
			if(node.left){
				queue.push(node.left);
			}
			if(node.right){
				queue.push(node.right);
			}
			return data
		}
	}
}




