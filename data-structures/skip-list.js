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
        //var x = this.header;
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
    
    this.remove = function(key) {
        /* TODO */
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