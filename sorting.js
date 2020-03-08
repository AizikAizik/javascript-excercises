// Bubble Sort

const BobbleSort = (array) =>{
    for (var i = 0; i < array.length; i++) {
        for(var j = 0; j <= i; j++){
            if(array[i] < array[j])
                swapArrayIndex(array, i , j)
        }
    }
    return array;
}

//function for swapping the elements

const swapArrayIndex = (array, index1, index2) =>{
[ array[index1], array[index2] ] = [ array[index2], array[index1] ] // es6 syntax for swapping variables
}


//Using Selection sort which is a bit faster than bubble sort

const selectionSort = (array) => {
    let min;
    let len = array.length;

    for (var i = 0; i < len; i++) {
        // set minimum to the position of i
        min = i;
        //check the rest of the array to see if anything is smaller
        for (var j = i+1; j < len; j++) {
            if(array[j] < array[min]){
                min = j;
            }
        }

        if (i != min) {
            swapArrayIndex(array, i, min)
        }

    }
    return array;
}
