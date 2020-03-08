// print a given set of number in a spiral border

// class PrintMatrix {
//   // empty constructor
//   constructor() {
//
//   }

var matrix = [ [1,2,3,4,5],
                        [6,7,8,9,10],
                        [11,12,13,14,15],
                        [16,17,18,19,20] ];

//method for printing the matrix in a spiral format
(function spiralPrint(matrix){
  var topRow = 0;
  var leftCol = 0;
  var bottomRow = matrix.length - 1;
  var rightCol = matrix[0].length - 1;

while (leftCol < rightCol &&  topRow < bottomRow)  {

//print the columns
for (var col = 0; col <= rightCol; col++) {
  console.log(matrix[topRow] [col]);
}
// increment the top toprow
topRow++;

//print the rows
for (var row = 1; row <=bottomRow; row++) {
  console.log(matrix[row] [rightCol]);
}
// reduce the right column'
rightCol--;

//check if the top row of the matrix is less than or equal to the bottom row
if (topRow <= bottomRow) {
  for (var col = rightCol; col >= 0; col--) {
    console.log(matrix[bottomRow] [col]);
  }
  bottomRow-- // decrement the bottom row value
}

//check if the left column  of the matrix is less than or equal to the right column
if (leftCol <= rightCol) {
  for (var row = bottomRow; row > topRow; row--) {
    console.log(matrix[row] [leftCol]);
  }
  leftCol++; // increment left column value
}

}

})(matrix); // run immediately using IIFE

// }
//
// var test = new PrintMatrix();
// test.spiralPrint()
