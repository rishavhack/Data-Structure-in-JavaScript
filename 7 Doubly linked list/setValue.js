class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList{
	contructor(){
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
		this.length++;
		return newNode;
	}
	pop(){
		if(!this.head){
			return undefined;
		}
		var poppedNode = this.tail;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	shift(){
		if(!this.head){
			return undefined;
		}
		var oldHead = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return newNode
	}
	getNode(index){
		if(index < 0 || index >= this.length){
			return null;
		}
		var count,current;
		if(index < this.length/2){
			count = 0;
			current = this.head;
			while(count != index){
				current = current.next;
				count++;
			}
		}else{
			count = this.length - 1;
			current = this.tail;
			while(count != index){
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	setValue(index,val){
		var foundNode = this.getNode(index);
		if(foundNode != null){
			foundNode.val  = val;
			return true;
		}else{
			return false;
		}
	}
}