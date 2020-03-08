/* Check whether there are any duplicates in an array of integers using
sets. By converting the array into a set, the size of the set can be
compared with the length of the array to check for duplicates easily. */

let arrays = [1,2,3,2,4,5]

(function hasDuplicte(array){
    let a = new Set(array);
    return a.size < array.length;
})(arrays)

// Time complexity O[n]
// Space complexity 0[n]

/*
Given two integer arrays with some of the same values, return one
array that has all the unique elements from both of the original arrays.
Using sets, unique elements can be stored easily. By concatenating
two arrays and converting them to a set, only unique items are stored.
Converting the set to an array results in an array with unique items
only.
*/

(function uniqueSets(arr1, arr2){
    let myNewSet = new Set(arr1.concat(arr2));
    return Array.from(myNewSet);
})([1,3.2,5,7.2] , [5,0.5,1,9])

//Time Complexity O[n + m]
//Space Complexity O[m + n]
