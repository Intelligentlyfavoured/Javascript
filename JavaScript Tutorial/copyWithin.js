let numArr = [1, 2, 3, 4, 5];
 
 
// target=3    start =0 end = 2
// Copies 2 element from index 0 & 1 to index 3 & 4 
numArr.copyWithin(3, 0,2);
 
console.log(numArr);