//find the sum of a number from  a possible combination of numbers from an arrayNum

const findSum = (array, sumValue) => {
  for (var i = 0; i < array.length; i++) {

    for (var j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] == sumValue)
        return `The array values for the sum value ${sumValue} is ${array[i]} and ${array[j]} `
    } // end of inner for loop
  }// end of outer for loop
  // return -1 if no value was found in the array
  return -1;
}


var aa = [1,2,3,4,5,6,7,8,9,0]

findSum(aa, 7)


// A better method or Algorithm in lesser time complexity o[n]

const findSumBetter = (array, sumValue) =>{
  var hashTable = { }; // empty hash table object
  for(var i = 0, arrlength = array.length; i < arrlength; i++){
    var currentElement = array[i];
    var difference = sumValue - currentElement;

    //check if the right one already exists
    if(hashTable[currentElement] != undefined){
      return [i , hashTable[difference]]
    } else{
      // store the INDEX
      hashTable[difference] = i;
    }

  }
  // return -1 if value wasnt found
  return -1;
}

// class work

//Write ur own user defined array.slice() function

const slice = (array, start, end) => {
  // if no begin index and end index arguements are passed
  if(!start && !end)
      return array; // return the full array.......

// set end index to size of array if only begin index is passed
 end = array.length;

// make a new empty array
 var partArray = []

 // if both begin and end index are specified
 for(let i =start; i < end; i++){ partArray.push(array[i]) }

 return partArray;

}
