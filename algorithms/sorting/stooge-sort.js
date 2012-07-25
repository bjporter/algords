/* 

Stooge Sort
    - Runs at O(n^(log3/log1.5))

*/


function swap(array_list, a, b) {
    var temp = array_list[b];
    array_list[b] = array_list[a];
    array_list[a] = temp;
}

function print_array(array_list, c, type, j, i) {
    var str = '';
    for(var ii = 0; ii < c; ii++) {
        str += '   ';
    }
    str += type + ', j = ' + j + ', i = ' + i + ' | ';
    for(ii = 0; ii < array_list.length; ii++) {
        if(ii === i) str += '[';
        if(ii === j) str += '(';
        str += array_list[ii];
        if(ii === i) str += ']';
        if(ii === j) str += ')';
        str+= ',';
    }
    
    return str;
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
    
function stoogesort(array_list, i, j, c,d,e, type, tval) {
    if(j === undefined) {
        j = array_list.length - 1;
    }
    if(i === undefined) {
        i = 0;
    }
    if(c === undefined) { c = 0;  }
    if(d === undefined) { d = 0;  }
    if(e === undefined) { e = 0;  }

    if(type === undefined) { type = 'starting'; }
    var isSwapped = '';
    if(array_list[j] < array_list[i]) {
        isSwapped = '**SWAPPED**';
        swap(array_list, j, i);
    }

    //console.log(print_array(array_list,c, type, j, i) + ' c = ' + c + ', t = ' + tval + ' ' + isSwapped);
    var starttime = new Date().getTime();
    //while(1) {
    //    var endtime = new Date().getTime();
    //    if(endtime - starttime > ) break;
    //}        
    
    //if(isInOrder(array_list)) return;

    if((j - i) > 1) {
        var t = parseInt((j - i + 1) / 3, 10);  //case 1 length: 2 / 3
        stoogesort(array_list, i, j - t, ++c, d, e, 'first', t); 
        stoogesort(array_list, i + t, j, c,++d,e, 'second', t); //Optimization: If no change was made on this call, don't call the third one. Could decrease running to by 90%+
        stoogesort(array_list, i, j - t, c,d,++e, 'last', t);
    }
    
    return array_list;
}
