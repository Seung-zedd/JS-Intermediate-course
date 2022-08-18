/*Arr.sort method*/
let arr = [27, 8, 5, 13];

// 디버깅:a-b에서 양수이면 그대로, 음수이면 작은숫자가 앞으로 온다.
// 8-27<0;  8,27,5,13
// 5-8<0;   5,8,27,13; 위에서 실행된 절차를 그대로 진행
// 13-27<0; 5,8,13,27
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

console.log(arr);

/*sort lodash버전*/
var _ = require("lodash");

let arr = [27, 8, 5, 13];

const result = _.sortBy(arr);

console.log(result);

/* reduce메소드를 통해 배열 안의 요소 더하기*/
let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result);

/*reduce메소드로 프로퍼티 안의 정보 추출*/
//(1)성인인 사람의 이름만 추출
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

const result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name); //빈리스트에 19세 이상인 이름의 요소를 추가
  }
  return prev;
}, []);

console.log(result);

//(2)이름이 3글자인 사람만 추출
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

const result = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result);
