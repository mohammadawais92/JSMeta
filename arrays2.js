const classdays = ['Sunday', 'Wednesday', 'Saturday'];
let find_day = classdays.find(function(e)
{e === 'Sunday'}
);
let find_day1 = classdays.find(e => e === 'Sunday');
console.log(find_day1)
console.log(find_day)
//Sorting elements of Array

let ages = [19, 2, 5, 6, 20, 11];
ages.sort();
console.log(ages.sort());
//sorting numbers is not workable on numbers,,, need different method, e.g. call back function.
const names = ['Ahmed', 'Ch', 'Doc', 'Sam', 'Bill']
names.sort();
console.log(names)

//======================================
//Multi Dimensional Arrays or Nested arrays

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [arr1, arr2]
console.log(arr3)
console.log(arr3[0][1])
