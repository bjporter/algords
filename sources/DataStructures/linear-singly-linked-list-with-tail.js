function Node() {
    this.data = null;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

LinkedList.prototype.add = function(data) {    
    if(this.head === null) {
        console.log('The list is empty');

        this.head = new Node();
        this.head.data = data;
        this.tail = this.head;
        this.count++;
    }
    else {
        console.log('The list is not empty');
        var node = new Node();
        node.data = data;

        this.tail.next = node;
        this.tail = node;
        this.count++;
        
        console.log(this.tail.data);
    }
    
    console.log('added: ' + data);
};

LinkedList.prototype.insert = function(data, index) {
    if(index < 0) throw new OutOfBoundsException();
    
    var record = this.head;
    var previous = null;
    var count = 0;
    
    if(index == this.count) this.add(data);
    else {
        
        while(count != index) {
            previous = record;
            if(record.next === null) throw new OutOfBoundsException();
            else {
                record = record.next;
                count++;
            }
        }
        
        
        var node = new Node();
        node.data = data;
        node.next = record;
        
        previous.next = node;
    
        console.log('inserting value ' + data + ' at index ' + index);

    }
};

LinkedList.prototype.print = function() {
    var record = this.head;
    var count = 0;
    
    console.log(record.data + ' at ' + count);
    count++;


    while(record.next !== null) {
        record = record.next;
        console.log(record.data + ' at ' + count);

        count++;
    }
};

LinkedList.prototype.item = function(index) {
    //check bounds
    if(index < 0) throw new OutOfBoundsException();
    
    var record = this.head;
    var count = 0;
    
    
    while(count != index) {
        if(record.next === null) throw new OutOfBoundsException();
        else  {
            record = record.next;
            count++;    
        }
    }
    
    console.log('retrieving value ' + record.data + ' at index ' + index);
    
    return record.data;
};

LinkedList.prototype.remove = function(index) {
     //Check bounds
     if(index < 0) throw new OutOfBoundsException();
     
    var record = this.head; 
    var count = 0;

    
    while(count != index) {
        if(record.next === null) throw new OutOfBoundsException();
        else  {
            record = record.next;
            count++;    
        }
    }
    
    console.log('removed item ' + record.data + ' at index ' + index + " replaced by " + record.next.data);
    
    record.data = record.next.data;
    
    if(index == this.count) {
        this.tail = record;
    }
    else {
        record.next = record.next.next;   
    }
        
    this.count--;
    
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
linkedList.print();

linkedList.item(0);
linkedList.item(1);
linkedList.item(2);
linkedList.item(3);

linkedList.add(100);
linkedList.print();

linkedList.remove(1);
linkedList.print();

linkedList.remove(1);
linkedList.print();


linkedList.item(0);
linkedList.item(1);
linkedList.item(2);

linkedList.add(6);
linkedList.print();
