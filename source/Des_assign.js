//ex(1)
let [x, y] = [1, 2];

console.log(x); //1
console.log(y); //2

// ex(2):can destruct string into array
let str = "Mike-Tom-Jane";

let [user1, user2, user3] = str.split("-");

console.log(user1); //Mike
console.log(user2); //Tom
console.log(user3); //Jane

// ex(3):if certain value doesn't exist, it returns undefinded.
let [a, b, c] = [1, 2];

console.log(a);
console.log(b);
console.log(c);

// ex(4):it can also ignore certain return value.
let [user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];

console.log(user1); //Mike
console.log(user2); //Jane

// default value
let [a, b, c] = [1, 2]; //c returns undefinded.

let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a); //1
console.log(b); //2
console.log(c); //5

// ex(5):it can swap value in turn by destructing arr assignment.
let [a, b] = [1, 2];
[a, b] = [b, a]; //you can imagine two-dimensional coordinate system.

console.log(a); //2
console.log(b); //1

// Destructing obj_assignment:you can assign prev obj to a new variable name
let user = { name: "Mike", age: 30 };

let { name: userName, age: userAge } = user; //userName <-"Mike", userAge <- 30

console.log(userName); //"Mike"
console.log(userAge); //30

// ex(2):Default value
let user = {
  name: "Jane",
  age: 18,
  gender: "female",
};

let { name, age, gender = "male" } = user;

console.log(gender); //★기본값이 undefinded일때만 기본값이 사용됨
