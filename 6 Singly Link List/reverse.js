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
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let current = this.head;
        let newTail = current
        while(current){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head){
            return undefined
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return currentHead;
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
        this.length++;
        return this;
    }
    getNode(index){
        if(index < 0 || index > this.length){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next;
            counter++
        }
        return current;
    }
    insert(val,index){
        if(index < 0 || index > this.length){
            return null;
        }
        if(index === 0){
            return this.unshift(val);
        }
        if(index === this.length){
            return this.push(val)
        }
        let newNode = new Node(val);
        let previous = this.getNode(index - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++
        return this
    }
    remove(index){
        if(index < 0 || index > this.length){
            return null
        }
        if(index === 0){
            return this.shift()
        }
        if (index === this.length-1) {
            return this.pop()
        }
        let previous = this.getNode(index - 1);
        let removeTemp = previous.next;
        previous.next = removeTemp.next;
        this.length--;
        return removeTemp;
    }
}