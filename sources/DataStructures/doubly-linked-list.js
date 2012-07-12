function Node(values) {
    if(values === undefined) {       
        this.data = null;
        this.next = null;
        this.prev = null;
    } else {
        this.data = values.data;
        this.next = values.next === undefined ? null : values.next;
        this.prev = values.prev === undefined ? null : values.prev;
    }
    
}

function LinkedList() {
    this.head = null;
    //this.count = 0;
}

LinkedList.prototype.prepend = function(data) {    
    var node = null;
    
    //If list is non-empty
    if(this.head !== null) {
        node = new Node({ data : this.head.data, next : this.head.next, prev : this.head });
        this.head = new Node({ data : data, next : node });
    }
    else //If list is empty
        this.head = new Node({ data : data, next : null});
    
    //this.count++;
    
    console.log('Prepending: ' + data);
};

//First case - empty list: Simply prepend
//Second case - unempty list
LinkedList.prototype.append = function(data) {
    if(this.head === null) this.prepend(data);
    else {
        var record = this.head;
        while(record.next !== null) {
            record = record.next;
        }
        
        record.next = new Node({ data : data, next : null, prev : record });
        
        console.log('Appending ' + data);
    }
};

LinkedList.prototype.length= function() {
    if(this.head === null) return 0;
    
    var count = 1;
    var record = this.head;
    
    while(record.next !== null) {
        count++;
        
        record = record.next;
    }
    
    return count;
};

LinkedList.prototype.first = function() {    
    if(this.head === null) return null;
    
    return this.head;
};

LinkedList.prototype.last = function() {    
    if(this.head === null) return null;
    
    var record = this.head;
    
    while(record.next !== null) {
        record = record.next;
    }
    
    return record;
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
        
    return record.data;
};

/* OLD FUNCTIONS */
LinkedList.prototype.print = function() {
     console.log('Printing:');
     if(this.head === null) {
        console.log('\tList is empty.');
        return;
     }
     
    var record = this.head;
    var count = 0;
    
    console.log('\t' + record.data + ' at ' + count);
    count++;


    while(record.next !== null) {
        record = record.next;
        console.log('\t' + record.data + ' at ' + count);

        count++;
        if(count > 100) break;
    }
};

LinkedList.prototype.remove = function(index) {
    if(index < 0) throw new OutOfBoundsException();
     
    if(this.head === null) {
        console.log('List is empty.');
        return;
    }
    
    //First item removed, so make sure that the second item's prev is null, since it's the new head
    if(index === 0) {        
        this.head = this.head.next;
        
        if(this.head.next !== null)
            this.head.prev = null;

        return;
    }
    
    var previous = null;
    var record = this.head; 
    var count = 0;

    
    while(count !== index) {
        previous = record;
        if(record.next === null) throw new OutOfBoundsException();
        else  {
            record = record.next;
            count++;    
        }
    }

    console.log('removed item ' + record.data + ' at index ' + index);
    

    if(record.next === null) { //If removing at the end
        previous.next = null;
        console.log("replaced by " +  null);
    } else {
        console.log(" replaced by " + record.next.data);
        record.data = record.next.data;
        record.next = record.next.next;
    }
};


LinkedList.prototype.insertAt = function(data, index) {
    if(index < 0) throw new OutOfBoundsException();

    var record = this.head;
    var previous = null;
    var count = 0;
    var node = new Node();

    if(index === 0) { //Place at head
        node.data = this.head.data;
        node.next = this.head.next;
        
        this.head.data = data;
        this.head.next = node;
        console.log('inserting value ' + data + ' at index ' + index + ' ' + this.head.data);
        return;
    }

    while(count != index) {
        previous = record;
        
        record = record.next;
        count++;
    }
    
    node = new Node();
    node.data = data;
    node.next = record;
    
    previous.next = node;

    console.log('inserting value ' + data + ' at index ' + index);

};

function OutOfBoundsException(message) {
    this.name = "OutOfBounds";
    this.message = message || "The index is out of bounds";
}
OutOfBoundsException.prototype = new Error();
OutOfBoundsException.prototype.constructor = OutOfBoundsException;


var linkedList = new LinkedList();

//Prepend to empty list
linkedList.prepend('first');
linkedList.print();

//Prepend to unempty list
linkedList.prepend('new-first');
linkedList.print();

//wipe out list
linkedList = new LinkedList();

//Append empty list
linkedList.append('last');
linkedList.print();

//Append unempty list
linkedList.append('new-last');
linkedList.print();

//Get count of list
console.log('Length of list: ' + linkedList.length());

//Wipe out list
linkedList = new LinkedList();

//print empty list
linkedList.print();

//Get count of empty list
console.log('Length of empty list: ' + linkedList.length());

console.log('First in empty list: ' + linkedList.first());
console.log('Last in empty list: ' + linkedList.last());


//Add items
linkedList.prepend('first');
linkedList.append('second');
linkedList.append('last');
linkedList.prepend('zero');

linkedList.print();

//Get first in unempty list
console.log('First in unempty list: ' + linkedList.first().data);
console.log('First.next.prev in unempty list: ' + linkedList.first().next.prev.data);
console.log('Last in unempty list: ' + linkedList.last().data);
console.log('Last.prev in unempty list: ' + linkedList.last().prev.data);

//Retrieve some values
console.log('Retrieve value of index 0: ' + linkedList.item(0));
console.log('Retrieve value of index 1: ' + linkedList.item(1));
console.log('Retrieve value of index 3: ' + linkedList.item(3));

linkedList.remove(0);
console.log('Remove value zero at index 0');

linkedList.print();
//console.log('Remove value at index 1 ' + linkedList.remove(1)); 
//console.log('Remove last value: ' + linkedList.remove(1)); 

/*
//Remove First
linkedList.remove(0);

//Remove Middle
linkedList.remove(1);

//Remove End
linkedList.remove(1);

//Remove last one
linkedList.remove(0);

linkedList.print(); //Empty List

linkedList.insertAt(5, 0); //Insert in front
linkedList.insertAt(12, 2); //Insert between 10, and 20
linkedList.insertAt(28, 4); //Insert between 20, and 30
linkedList.insertAt(114,7); //Insert at the end
*/