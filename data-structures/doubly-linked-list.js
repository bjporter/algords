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

LinkedList.prototype.isEmpty = function() {
    if(this.head === null) return true;
    
    return false;
};

LinkedList.prototype.findMiddle = function() {
    if(this.head === null) return null;
    else if(this.head.next === null) return this.head;
    
    var middle = this.head;
    var single = this.head;
    var count = 0;
    
    while(single.next !== null) {
        single = single.next;
        count++;
        
        if(count == 2) {
            middle = middle.next;
            count = 0;
        }
    }
    
    return middle;
};

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
    
    //remove only first item
    if(this.head.next === null) {
        this.head = null;
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

    if(record.next === null) { //If removing at the end
        previous.next = null;
    } else {
        record.data = record.next.data;
        record.next = record.next.next;
    }
};

/* OLD FUNCTIONS */
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
        
        return this.head;
    }

    while(count != index) {
        previous = record;
        
        record = record.next;
        count++;
    }
    
    node = new Node({ data : data, next : record, prev : previous });
    
    previous.next = node;

    console.log('inserting value ' + data + ' at index ' + index);
    
    return node;
};

function OutOfBoundsException(message) {
    this.name = "OutOfBounds";
    this.message = message || "The index is out of bounds";
}
OutOfBoundsException.prototype = new Error();
OutOfBoundsException.prototype.constructor = OutOfBoundsException;

var node = new Node();
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

linkedList.remove(1);
console.log('Remove value second at index 1'); 

linkedList.remove(1);
console.log('Remove last value'); 

linkedList.print();

console.log('Is list empty? ' + linkedList.isEmpty());


linkedList.remove(0);
console.log('Remove "first" value');

console.log('Is list empty? ' + linkedList.isEmpty());

console.log('What is the middle of empty? ' + linkedList.findMiddle());

linkedList.append('first');
linkedList.print();
console.log('What is the middle of one item? ' + linkedList.findMiddle().data);

linkedList.append('second');
linkedList.print();
console.log('What is the middle of two items? ' + linkedList.findMiddle().data);

linkedList.append('third');
linkedList.print();
console.log('What is the middle of three items? ' + linkedList.findMiddle().data);

node = linkedList.insertAt('fourth', 3);
console.log('Insert fourth at the end, prev is - ' + node.prev.data);
linkedList.print();

node = linkedList.insertAt('two-half',2);
console.log('Insert two-half in middle, prev is - ' + node.prev.data);
linkedList.print();

node = linkedList.insertAt('negetive-one', 0);
console.log('Insert negetive-one at front , prev is - ' + node.prev);
linkedList.print();


/*
linkedList.insertAt(5, 0); //Insert in front
linkedList.insertAt(12, 2); //Insert between 10, and 20
linkedList.insertAt(28, 4); //Insert between 20, and 30
linkedList.insertAt(114,7); //Insert at the end
*/