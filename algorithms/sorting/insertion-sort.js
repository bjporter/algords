var array_list = [];
for(var i = 0; i < 10; i++) {
    array_list[array_list.length] = parseInt(Math.random() * 1000,10);
}


function swap(array_list, a,b) {
    var temp = array_list[b];
    array_list[b] = array_list[a];
    array_list[a] = temp;
}


function insertionsort(array_list) {
    var timestart = new Date().getTime();

    for(var i = 1 ; i < array_list.length; i++) {
        //An element is out of place, move forward it forward in the list in order
        var pos = i;
        
        while(array_list[pos] < array_list[pos - 1] && pos > 0) {
            var timeend = new Date().getTime();
            
            if(timeend - timestart > 60000) { //If it takes longer than a minute, time out
                console.log('timed out...');
                return;
            }
            swap(array_list, pos, pos-1);
            pos--;
        }
    }        
}   

