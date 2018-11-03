class Node{
	construtor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	construtor(){
		this.head=  null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}else{
			this.tail.next = newNode;
			this.tail = newNode; 
		}
		this.length ++
		return ++
	}
	tranverse(){
		let current = this.head;
		while(current){
			console.log(current.val);
			current = current.next
		}
	}
}