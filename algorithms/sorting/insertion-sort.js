function swap(array_list, a,b) {
    var temp = array_list[b];
    array_list[b] = array_list[a];
    array_list[a] = temp;
}


function insertionsort(array_list) {
    for(var i = 1 ; i < array_list.length; i++) {
        //An element is out of place, move forward it forward in the list in order
        var pos = i;
        
        while(array_list[pos] < array_list[pos - 1] && pos > 0) {            
            swap(array_list, pos, pos-1);
            pos--;
        }
    }        
}   

