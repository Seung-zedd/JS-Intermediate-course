/*************************
 * call method
 *************************/
// const mike = {
//   name: "Mike",
// };

// const tom = {
//   name: "Tom",
// };

// function showThisName() {
//   console.log(this.name);
// }

// showThisName();
// showThisName.call(mike);
// showThisName.call(tom);

// function update(birthyear, occupation) {
//   this.birthyear = birthyear;
//   this.occupation = occupation;
// }

// update.call(mike, 1999, "singer");
// console.log(mike);

// update.call(tom, 1988, "developer");
// console.log(tom);

/**************************************
 * 위의 update함수를 apply로 바꿔본다면?
 *Math method를 통한 call과 apply의 차이점
 **************************************/
const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function update(birthyear, occupation) {
  this.birthyear = birthyear;
  this.occupation = occupation;
}

update.apply(mike, [1999, "singer"]);
update.apply(tom, [1988, "developer"]);

console.log(mike);
console.log(tom);

const nums = [1, 5, 9, 15, 18, 3];

const minNum = Math.min.apply(99999, nums); //첫번째 param은 아무거나 넣어도 됨.
// = Math.min.apply(null,[1,5,9,15,18,3])
console.log(minNum);

const maxNum = Math.max.call(null, ...nums);
// = Math.max.call(null, 1, 5, 9, 15, 18, 3)
console.log(maxNum);

/***********************************
 * bind method
 **********************************/

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName();

let fn = user.showName; //fn에 할당하면 this를 잃어버림

fn.call(user);
fn.apply(user); //apply는 객체를 받을 수도 있다.

let boundfn = fn.bind(user); //어떤 변수에 할당하면 this를 잃어버리는데, bind는 this값을 바꿔줌.

boundfn();
