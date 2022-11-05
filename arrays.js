// const array1 = ['Sun', 'Mon', 'Tue']
// console.log(array1.length)
// array1[0] = "Sunday";
// console.log(array1);

//Push and Splice Methods.

const daysofWeek = [];
daysofWeek.push("Sunday");
daysofWeek.push("Monday");
daysofWeek.push('Thursday')

console.log(daysofWeek)

daysofWeek.splice(2,0, 'Tuesday')
daysofWeek.splice(3,0, "Wednesday")  //Adding missing element at given index, deleting none.

// daysofWeek.splice(2,0, 'Tuesday', 'Wednesday')

console.log(daysofWeek)

const daysofWeek2 = ['Friday', 'Saturday']
console.log(daysofWeek + daysofWeek2)
console.log(daysofWeek.concat(daysofWeek2));

//pop will delete the last element in array and shift will remove the first element.

const test = daysofWeek2
test.push(1000)
console.log(test)
test.pop()
console.log(test)

//adding element at a certain index, use splice

const array3= ['alpha', 'bravo', 5, 7, 'charlie'];
array3.splice(2,2) //first 2 means that it will start inserting from index 2. nothing to insert here.
// second argument 2 means it will delete 2 elements. rest remain same.
console.log(array3)
array3.splice(2,1, 'gama') //start insert 'gama' from index 2 and delete 1 element.
console.log(array3)
array3.splice(2,0, 'c', 'b') 
console.log(array3)
