/*******************************************************
 * class와 생성자 함수의 큰 차이점:
 생성자 함수는 new를 안붙이면 undefined를 반환하지만,
 class는 new를 안붙이면 에러가 발생함.
 * class 문법은 constructor 메소드로 생성자 함수 기능을 대신함
 * class method는 for in 문에서 제외됨.
 ***************************************************/

// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log(this.name);
//   };
// };

// const mike = new User("mike", 30);

// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }

// const tom = new User2("tom", 19);

// for (const p in mike) {
//   console.log(p);
// }

// for (const p in tom) {
//   console.log(p);
// }

/***************************************************
 * 생성자 함수의 상속은 생성자함수.prototype로 만들지만,
 class에서의 상속은 extends 키워드를 사용
 ****************************************************/

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  park() {
    console.log("PARK");
  }
}

const z4 = new Bmw("blue");

z4.drive();
