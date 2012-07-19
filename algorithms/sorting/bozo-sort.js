/*

Bozo Sort 
 - Randomly swap 2 elements in the list until the list is in order.
 - It is more efficient than Bogo Sort

*/

function bozosort(list) {
    var count = 0;
    while(!isInOrder(list)) {
        swap(list, randomNumRange(0, list.length - 1), randomNumRange(0, list.length - 1));

        if(count > 100000000) return;
    }
}

function randomNumRange(min, max) {
    return parseInt(Math.random() * ((max + 1) - min), 10) + min; 
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