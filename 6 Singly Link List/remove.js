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
        this.length++
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let currentTail = this.head;
        let newTail = currentTail;
        while(currentTail){
            newTail = currentTail
            currentTail = currentTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        let newHead = this.head;
        this.head = newNode.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return newHead
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }
    getNode(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next
            counter++
        }
        return current;
    }
    insert(val,index){
        if(index < 0 || index > this.length){
            return null
        }
        if(index === this.length){
            return this.push(val)
        }
        if(index === 0){
            return this.unshift(val)
        }
        let previous = this.getNode(index - 1);
        let newNode = new Node(val);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++
        return this;
    }
    remove(index){
        if(index < 0 || index > this.length){
            return null;
        }
        if(index === 0){
            this.shift()
        }
        if(index === this.length - 1){
            this.pop()
        }
        let previous = this.getNode(index-1);
        var removedtemp = previous.next;
        previous.next  = removedtemp.next;
        this.length--
        return removedtemp;

    }
}