// Binary Search Functionality
//Divide and Conquer

const bSearch = (array, value) =>{
  let startIndex = 0; // the begining of the array
  let endIndex = array.length -1; // the length of the array
  while(startIndex <= endIndex){

    //get the middle index of the array
    let middleIndex = Math.floor((startIndex + endIndex) /2);//round the value down using the math.floor method

    // Check if the value is in the middle of the array
    if(array[middleIndex] === value){
      console.log(`Array value found at the index ${middleIndex}`);
      return true;
    }
   else if (array[middleIndex] < value) { // we trim of the left side and start searching towards the right side
      startIndex = middleIndex + 1; //re-assign the startIndex
   }
   else if(array[middleIndex] > value){ // we trim of the right side and start searching towards the slideInLeft
    endIndex = middleIndex - 1;
   }

  }
  console.log(`Target Value wasnt found in the Array`);
  return false;
}


//prime factors

const primeFactor = (n) =>{
  //first print the 2's that divide n
  while (n %2 == 0) {
    console.log(2);
    n = n/2;
  }

// n should be prime by this time

  for (var i = 3; i * i < n; i = i + 2) {
    while(n % i == 0){
      console.log(i);
      n = n/i;
    }
  }

// this checks if n is a prime number in this case
  if (n > 2) {
    console.log(n);
  }
}
