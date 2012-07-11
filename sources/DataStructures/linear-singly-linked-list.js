function Node() {
    this.data = null;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(data) {    
    if(this.head === null) {
        //console.log('The list is empty');

        this.head = new Node();
        this.head.data = data;
    }
    else {
       // console.log('The list is not empty');
        var node = new Node();
        node.data = data;
                
        var record = this.head;
        
        while(record.next !== null) {
            record = record.next;
        }
        
        record.next = node;
        //console.log(record.data + ', ' + record.next.data);
    }
    
    //console.log('added: ' + data);
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

LinkedList.prototype.print = function() {
    
     if(this.head === null) {
        console.log('List is empty.');
        return;
     }
     
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

LinkedList.prototype.remove = function(index) {
    if(index < 0) throw new OutOfBoundsException();
     
    if(this.head === null) {
        console.log('List is empty.');
        return;
     }
    
    if(index === 0) {
        console.log('removed first item');
        
        this.head = this.head.next;
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
    

    if(record.next === null) {

        previous.next = null;
        console.log("replaced by " +  null);
    }
    else {        
        console.log(" replaced by " + record.next.data);
        record.data = record.next.data;
        record.next = record.next.next;
    }
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

linkedList.remove(3);

linkedList.print();

linkedList.remove(0);

linkedList.print();


