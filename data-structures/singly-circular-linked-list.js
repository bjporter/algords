function Node() {
    this.data = null;
    this.next = null;
}

function LinkedList() {
    this.tail = new Node();
}

LinkedList.prototype.add = function(data) {    
    if(this.tail.next === null) {
        this.tail.next = new Node();
        this.tail.next.data = data;
    }
    else {
        var node = new Node();
        node.data = data;
                
        var record = this.tail.next;
        
        while(record.next !== null) {
            record = record.next;
        }
        
        record.next = node;
    }
};

LinkedList.prototype.item = function(index) {
    //check bounds
    if(index < 0) throw new OutOfBoundsException();
    
    var record = this.tail.next;
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

LinkedList.prototype.print = function() {
    
     if(this.tail.next === null) {
        console.log('List is empty.');
        return;
     }
     
    var record = this.tail.next;
    var count = 0;
    
    console.log(record.data + ' at ' + count);
    count++;


    while(record.next !== null) {
        record = record.next;
        console.log(record.data + ' at ' + count);

        count++;
    }
};

LinkedList.prototype.remove = function(index) {
    if(index < 0) throw new OutOfBoundsException();
     
    if(this.tail.next === null) {
        console.log('List is empty.');
        return;
     }
    
    if(index === 0) {
        console.log('removed first item');
        
        this.tail.next = this.tail.next.next;
        return;
     }
    
    var previous = null;
    var record = this.tail.next; 
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

LinkedList.prototype.length = function() {
    var count = 1;
    var record = this.tail.next;
    
    if(this.tail.next === null) return 0;
    else if(this.tail.next.next === null) return 1;
    else {
        while(record.next !== null) {
            record = record.next;
            count++;   
        }
        
        return count;
    }
};

LinkedList.prototype.insert = function(data, index) {
    if(index < 0) throw new OutOfBoundsException();

    var record = this.tail.next;
    var previous = null;
    var count = 0;
    var node = new Node();

    if(index === 0) { //Place at head
        node.data = this.tail.next.data;
        node.next = this.tail.next.next;
        
        this.tail.next.data = data;
        this.tail.next.next = node;
        console.log('inserting value ' + data + ' at index ' + index + ' ' + this.tail.next.data);
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
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

linkedList.print();

//Remove First
linkedList.remove(0);

//Remove Middle
linkedList.remove(1);

//Remove End
linkedList.remove(1);

//Remove last one
linkedList.remove(0);

linkedList.print(); //Empty List

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

linkedList.item(0); //10
linkedList.item(1); //20
linkedList.item(2); //30
linkedList.item(3); //40

linkedList.insert(5, 0); //Insert in front
linkedList.insert(12, 2); //Insert between 10, and 20
linkedList.insert(28, 4); //Insert between 20, and 30
linkedList.insert(114,7); //Insert at the end

linkedList.print();

console.log('The Length = ' + linkedList.length());