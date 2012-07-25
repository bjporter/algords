/*

Bubble Sort

*/

function bubblesort(arr) {
    var swapped = false;
    do {
        swapped = false;
        for(var i = 1; i < arr.length; i++) {
            if(arr[i] < arr[i - 1]) {
                swap(arr, i, i-1);
                swapped = true;
            }
        }
        
    } while(swapped);
}

function swap(arr,a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}