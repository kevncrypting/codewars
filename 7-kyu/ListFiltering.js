// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// l is equal to an array of strings and integers

// My first thought is that since this is accepting an array, I can use a higher order array function like filter to iterate through the entire array and return a new array checking type for only those of type number

function filter_list(l) {
  // Return a new array with the strings filtered out
  return (newList = l.filter((index) => typeof index === "number"));
}

// I defined a variable newList to store the output of the filter method, but in the solution it turns out I didn't need to!