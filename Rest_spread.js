// (1):Rest param이 배열이라 forEach method를 사용하는 경우
function add(...numbers) {
  let result = 0; //초기값을 0으로 설정
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// (2):reduce method를 사용하는 경우
function add(...numbers) {
  const result2 = numbers.reduce((prev, cur) => prev + cur, 0);
  console.log(result2);
}
// ☆복습:function을 화살표 함수로 사용할 수 있다
let add = function (num1, num2) {
  return num1 + num2;
};

let add = (num1, num2) => num1 + num2;
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/******나머지 매개변수를 이용한 생성자 함수 만들기 *******/
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);

/*************************
 * 전개 구문
 * arr1 을 [4,5,6,1,2,3]으로
 *************************/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1 = [...arr2, ...arr1];

console.log(arr1);

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
