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
		let newNode new Node(value);
		if(!this.root){
			this.root = newNode;
			return this
		}else{
			let current = this.root;
			while(true){
				if(current.value === value){
					return undefined;
				}
				if(value < current.value){
					if(current.left === null){
						current.left = newNode;
						return newNode;
					}
					current = current.left
				}else{
					if(current.right === null){
						current.right = newNode;
						return newNode;
					}
					current = current.right;
				}
			}
		}
	}
	find(value){
		if(this.root === null){
			return null;
		}
		var found = false;
		var current = this.root;
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
			return undefined
		}
		return current;
	}
	contain(value){
		if(this.root === null){
			return null;
		}
		var found = false;
		var current = this.root;
		while(current && !found){
			if(value < current.value){
				current = current.left
			}else if(value > current.right){
				current = current.right
			}else{
				return true;
			}
		}
		if(!found){
			return false;
		}
	}
	 BFS(){
	 	var node = this.root;
	 	var data = [];
	 	var queue = [];
	 	queue.push(node);
	 	while(queue.length){
	 		node = queue.shift();
	 		data.push(node.value);
	 		if(node.left) queue.push(node.left);
	 		if(node.right) queue.push(node.right);
	 	}
	 	return data
	 }
	 DFSPreOrder(){
	 	var data = [];
	 	function traverse(node){
	 		data.push(node.value);
	 		if(node.left) traverse(node.left);
	 		if(node.right) traverse(node.right);
	 	}
	 	traverse(this.root)
	 	return data

	 }
	 DFSPostOrder(){
	 	var data = [];
	 	function traverse(node){
	 		if(node.left) traverse(node.traverse);
	 		if(node.right) traverse(node.traverse);
	 		data.push(node.value)
	 	}
	 	traverse(this.root)
	 	return data
	 }
	 DFSInOrder(){
	 	var data = [];
	 	function traverse(node){
	 		if(node.left) traverse(node.left);
	 		data.push(node.value);
	 		if(node.right) traverse(node.right);
	 	}
	 	traverse(this.root)
	 	return data
	 }
}
