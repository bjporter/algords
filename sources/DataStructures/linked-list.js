function Node() {
    this.data = null;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.current_node = null;
    this.count = null;
    //this.tail = null;
}

LinkedList.prototype.add = function(data) {    
    if(this.head === null) {
        console.log('The list is empty');

        this.head = new Node();
        this.head.data = data;
        
        //this.tail = this.head;
        this.count++;

    }
    else {
        console.log('The list is not empty');
        var node = new Node();
        node.data = data;
                
        /*for(var i = 0; i < this.count - 1; i++) {
            if(record.next === null)
                record.next = data; 
            else
                record = record.next;
        }
                
        record = record.next; */
        
        this.count++;
        
        var record = this.head;
        
        while(record.next !== null) {
            record = record.next;
        }
        
        record.next = node;
        console.log(record.data + ', ' + record.next.data);
        
        //this.tail.next = node;
        //this.tail = node;
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
        
    //for(var i = 0; i < index; i++) {
    //    record = record.next;       
   // }
    
    console.log('retrieving value ' + record.data + ' at index ' + index);
    
    return record.data;
};

LinkedList.prototype.remove = function(index) {
     //Check bounds
     if(index >= this.count || index < 0) throw new OutOfBoundsException();
     
    var record = this.head; 
    var count = 0;
    //[head]->[1]->[2]->[3]

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


/*
    constructor: function() { alert('constructing'); },
    head: new Node(),
    add: function(data) {

    },
    remove: function(index) {
        console.log('removing: ' + index);
    },
    item: function(index) {
        console.log('retrieving: ' + index);
    }
*/

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
