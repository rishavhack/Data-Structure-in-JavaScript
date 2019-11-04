class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
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
        var newTail = this.head
        var current = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null
        }
        return this
    }
    shift(){
        if(!this.head){
            return undefined
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if(this.length == 0){
            this.tail = null;
        }
        return this
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head
            this.head = newNode
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
            current = current.next;
            counter++
        }
        return current
    }
}
var list = new SinglyLinkedList()