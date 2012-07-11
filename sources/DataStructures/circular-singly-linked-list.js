function Node() {
    this.data = null;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(data) {    
    if(this.head === null) {
        console.log('The list is empty');

        this.head = new Node();
        this.head.data = data;
        
        this.count++;

    }
    else {
        console.log('The list is not empty');
        var node = new Node();
        node.data = data;
        
        this.count++;
        
        var record = this.head;
        
        while(record.next !== null) {
            record = record.next;
        }
        
        record.next = node;
        console.log(record.data + ', ' + record.next.data);
    }
    
    console.log('added: ' + data + ', count: ' + this.count);
};

LinkedList.prototype.item = function(index) {
    //check bounds
    if(index >= this.count || index < 0) throw new OutOfBoundsException();
    
    var record = this.head;
    var count = 0;
    
    while(count != index) {
        record = record.next;
        count++;    
    }
    
    console.log('retrieving value ' + record.data + ' at index ' + index);
    
    return record.data;
};

LinkedList.prototype.remove = function(index) {
     //Check bounds
     if(index >= this.count || index < 0) throw new OutOfBoundsException();
     
    var record = this.head; 
    var count = 0;

    while(count != index) {
        record = record.next;
        count++;
    }
    
    console.log('removed item ' + record.data + ' at index ' + index + " replaced by " + record.next.data);
    
    record.data = record.next.data;
    record.next = record.next.next;
    
    return record.data;
    
}

function OutOfBoundsException(message) {
    this.name = "OutOfBounds";
    this.message = message || "The index is out of bounds";
}
OutOfBoundsException.prototype = new Error();
OutOfBoundsException.prototype.constructor = OutOfBoundsException;


var linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

linkedList.item(0);
linkedList.item(1);
linkedList.item(2);
linkedList.item(3);

linkedList.remove(1);

linkedList.item(0);
linkedList.item(1);
linkedList.item(2);

linkedList.remove(1);

linkedList.item(0);
linkedList.item(1);
