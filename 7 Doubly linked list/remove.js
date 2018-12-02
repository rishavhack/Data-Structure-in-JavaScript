class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        var poppedNode = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--
        return poppedNode
    }
    shift()
    {
        if(!this.head){
            return undefined
        }
        var poppedNode = this.head
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode
    }
    get(index){
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
                current = current.prev
                count--;
            }
        }
        return current
    }
    setValue(index,val){
        foundValue = this.get(index)
        if(foundValue != null){
            foundValue.val = val;
            return true
        }
        return false
    }
    insert(index,val){
        if(index < 0 || index > this.length){
            return null;
        }
        if(index == 0 ){
            return this.unshift(val);
        }
        if(index == this.length){
            return this.push(val)
        }
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var temp = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode
        this.length--;
        return this
    }
    remove(index){
    	if(index < 0 || index > this.length){
            return null;
        }
        if(index == 0){
        	return this.shift()
        }
        if(index == this.length - 1){
        	return this.pop()
        }
        var removeNode = this.get(index)
        var tempPrev = removeNode.prev;
        var tempNext = removeNode.next;
        tempPrev.next = tempNext;
        tempNext.prev = tempPrev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}

