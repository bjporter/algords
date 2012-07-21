function bogosort(list) {
    var count = 0;
    while(!isInOrder(list)) {
        shuffle(list);   
        count++;
        
        if(count > 100000000) return;
    }
}

function randomNumRange(min, max) {
    return parseInt(Math.random() * ((max + 1) - min), 10) + min; 
}

function shuffle(list) {
    for(var i = 0; i < list.length; i++)
        swap(list, i, randomNumRange(0, list.length - 1));
}

function isInOrder(list) {
    var firstVal = list[0];
    for(var i = 1; i < list.length; i++) {
        if(list[i] < firstVal) 
            return false;
        else 
            firstVal = list[i];
    }
    
    return true;
}

function listCopy(list) {
    var newList = [];
    for (var i = 0; i < list.length; i++) {
        newList = list[0];
    }
}

function swap(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}