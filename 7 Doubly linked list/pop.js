class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++
		return this
	}
	pop(){
		if(!this.head){
			return undefined;
		}
		var current = this.head;
		var newTail = current;
		while(current){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
	}
}