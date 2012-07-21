function swap(array_list, a, b) {
    var temp = array_list[b];
    array_list[b] = array_list[a];
    array_list[a] = temp;
}
function print_array(array_list) {
    var str = '';
    for(var i = 0; i < array_list.length; i++) {
        str += array_list[i] + ',';
    }
    
    return str;
}
    
function stoogesort(array_list, i, j) {
    if(j === undefined) {
        j = array_list.length - 1;
    }
    if(i === undefined) {
        i = 0;
    }
    
    if(array_list[j] < array_list[i]) {
        swap(array_list, j, i);
    }
    
    if((j - i) > 1) { 
        var t = parseInt((j - i + 1) / 3, 10); 
        stoogesort(array_list, i, j - t); 
        stoogesort(array_list, i + t, j);
        stoogesort(array_list, i, j - t);
    }
    
    return array_list;
}
