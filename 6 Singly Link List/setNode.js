class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}
	push(val){
		let newNode = new Node(val)
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			this.length = 0;
		}else{
			this.tail.next = newNode;
			this.tail = newNode
		}
		this.length++;
		return this
	}
	pop(){
		if(!this.head){
			return undefined
		}
		var newTail = this.head;
		var current = newTail
		while(current){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		if(this.length == 0){
			this.head = null
		}
		this.length--
		return current;
	}
	shift(){
		if(!this.head){
			return undefined
		}
		var poppedHead = this.head;
		this.head = poppedHead.next;
		this.length--
		if(this.length == 0){
			this.tail = null;
		}
		return poppedHead;
	}
	unshift(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++
		return this
	}
	getNode(index){
		if(index < 0 || index >= this.length){
			return null
		}
		var count = 0;
		var current = this.head
		while(count != index){
			current = current.next;
			count++;
		}
		return current;
	}
	setNode(index,val){
		var foundNode = this.getNode(index);
		if(foundNode != null){
			foundNode.val = val
			return true
		}
		return false
	}
	insert(index,val){
		if(index < 0 || index > this.length){
			return null
		}
		if(index == 0 ){
			return this.unshift(val)
		}
		if(index == this.length){
			return this.push(val)
		}
		var newNode = new Node(val)
		var prevNode = this.getNode(index - 1);
		var temp = prevNode.next;
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++
		return this
	}
	remove(index,val){
		if(index < 0 || index >= this.length){
			return null
		}
		if(index == 0){
			return this.shift()
		}
		if(index = this.length - 1){
			return this.pop()
		}
		var prevNode = this.getNode(index - 1)
		var temp = prevNode.next
		prevNode.next = temp.next;
		this.length--
		return true
	}
	reverse(){
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
	}
}




