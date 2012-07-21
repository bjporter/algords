/*

Skip List 
    * Based off the paper "Skipped Lists: A probabalistic alternative to balanced trees"
    * URL: ftp://ftp.cs.umd.edu/pub/skipLists/skiplists.pdf

*/

function Node(data) {
    this.value = data === undefined || data.value === undefined ? null : data.value;
    this.key = data === undefined || data.key === undefined ? null : data.key;
    this.forward = data === undefined || data.forward === undefined ? new Array(data.level) : data.forward;
}

function SkipList() {
    this.p = 0.5;
    this.level = 1;
    this.maxLevel = 7;
    this.header = new Node({ level : this.maxLevel, key : Number.MIN_VALUE }); //make sure header is always smaller
    this.nil = new Node({ level : this.maxLevel, key : Number.MAX_VALUE });    //make sure nill is always larger
    
    //Make sure all levels of header point to nil
    for(var i = 0; i < this.maxLevel; i++) this.header.forward[i] = this.nil;
    
    this.search = function(key) {
        var x = this.header;
        
        for(var i = x.forward.length - 1; i >= 0; i--) {
            while(x.forward[i].key < key)
                x = x.forward[i];
        }
        
        console.log(x.forward[0]);
        return x.forward[0];
    };
        
    this.insert = function(key, value) {
        var update = []; //Hold values to use as forward for levels
        var x = this.header;
        
        //Iterate through the levels
        for(var i = x.forward.length - 1; i >= 0; i--) {                
            while(x.forward[i].key < key) 
                x = x.forward[i];
            
            update[i] = x;
        }

        x = x.forward[0];
        
        //If key is already present, simply replace the data
        if(x.key === key) 
            x.value = value;
        else {
            var newLevel = this.randomLevel();
            
            if(newLevel > this.level) {
                for(i = this.level; i < newLevel; i++) {
                    update[i] = this.header;
                }
             
                this.level = newLevel;
            }
                            
            //Create new node, set the values, then fill it with the forward pointers
            x = new Node({ level : newLevel, key : key, value : value });
            
            for(i = 0; i < newLevel; i++) {
                x.forward[i] = update[i].forward[i];
                update[i].forward[i] = x;
            }                    
        }
    };
    
    this.length = function() {
        if(this.isEmpty())
            return 0;
        
        var x = this.header.forward[0];
        var count = 0;
        
        
        while(x.key < Number.MAX_VALUE) {
            x = x.forward[0];
            count++;
        }
        
        return count;
    };

    this.isEmpty = function() {
        if(this.header.forward[0].key === Number.MAX_VALUE)
            return true;
            
        else 
            return false;
    };

    this.print = function() {
        if(this.isEmpty()) {
            console.log("The list is empty");
            return;
        }
                    
        var x = this.header;
        var out = "";
        
        for(var i = x.forward.length - 1; i >= 0; i--) {          
            console.log("level: " + i);
            var tempx = x;
            out += "\tHead\t->\t";
            
            while(x.forward[i].key < Number.MAX_VALUE) {
                out += x.forward[i].key + "\t->\t";
                x = x.forward[i];
            }

            out+= "Nil";
            console.log(out);
            
            out = "\t";
            
            x = tempx;

        }
        
    };
    
    this.remove = function(key) {
        var x = this.header;
        var update = [];
        console.log(x.forward.length - 1);
        
        //Loop through forward levels
        for(var i = x.forward.length - 1; i >= 0; i--) {
            //Loop through linked list on particular level until a great key is found
            console.log('i = ' + i);
            while(x.forward[i].key < key) {
                x = x.forward[i]; //if key is less, move forward
                console.log('x.forward[' + i + '] = ' + x.key);
            }   
            update[i] = x; //keep note of the last key before greater
        }
        console.log('2');
        x = x.forward[0]; //set to the bottom 
        
        console.log('x.forward[0] = ' + x.key);
        if(x.key === key) { console.log('found key ' + x.key);
            for(i = 0; i < this.level - 1; i++) {
                if(update[i].forward[i] !== x) 
                    break;
                
                update[i].forward[i] = x.forward[i];
            }
            
            x = null;
            
            //Set the list level to the tallest in the list
            while (this.level > 1 && this.header.forward[this.level - 1] === Number.MAX_VALUE)
                this.level--;
        }
        
        
    };
    
    //Generate a random number. If it's less than p, increment the level, 
    //and do it again until greater than p, or maximum level is achieved
    this.randomLevel = function() {
        var lvl = 1;
        while (Math.random() < this.p && lvl < this.maxLevel - 1) {
            lvl++;
        }
        
        return lvl;
    };
}