class Node{
	constructor(val){
		this.val = val;
		this.next = null
	}
}
class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.next = null;
		this.length = 0;
	}
	push(val){
		let newNode = new Node(val)
		if(!this.head){
			this.head = newNode;
			this.tail = this.head
		}else{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++
		return this;
	}	
	pop(){
		if(!this.head){
			return undefined;
		}
		let current = this.head;
		let newTail = current
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		return newTail;
	}
	shift(){
		if(!this.head){
			return undefined;
		}
		let newHead = this.head;
		this.head = newHead.next;
		this.length--;
		if(this.length === 0){
			this.tail = null
		}
		return newHead
	}
	unshift(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}else{
			newNode.next = newNode;
			this.head = newNode;
		}
		this.length++
		return newNode
	}
	get(index){
		if(index < 0 || index >= this.length){
			return null;
		}
		var counter = 0;
		var current = this.head;
		while(counter != index){
			current = current.next;
			counter++
		}
		return current;
	}
	insert(index,val){
		if(index < 0 || index > this.length){
			return null;
		}
		if(index === this.length){
			return this.push(val);
		}
		if(index === 0){
			return this.unshift(val)
		}
		var newNode = new Node(val);
		var prev = this.get(index - 1)
		var temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++
		return true;
	}
}