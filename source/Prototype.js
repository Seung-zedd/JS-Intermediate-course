//obj.__proto__(underscore 2번)를 이용한 상위객체로의 상속//

const cars = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};

const bmw = {
  navigation: 1,
  color: "red",
};

bmw.__proto__ = cars;

const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw;

console.log(x5.color);

//hasOwnProperty():객체의 property만 true값을 반환, 상위 객체로부터 상속받은 property는 false.

for (let p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log("o", p);
  } else console.log("x", p);
}

const cars = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};

//생성자 함수(대문자)로 prototype 객체 생성 가능
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype = {
  constructor: Bmw,//반드시 constructor를 명시해 줄 것!!
  wheels: 4,
  drive() {
    console.log("drive..");
  },
  stop() {
    console.log("Stop!");
  },
};

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive..");
// };

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5.wheels);
x5.drive();
z4.stop();

/*************************
 * closure를 이용한 매개변수 고정
 ******************************/

const Bmw = function (color) {
  const c = color; //매개변수인 color를 상수로 고정함으로써 수정불가.
  this.getColor = function () {
    console.log(c);
  };
};

const x5 = new Bmw("red");
x5.color = "black";
x5.getColor();//위에서 {color:"black"}으로 수정을 해도 getColor는 생성자 함수의 param인 "red"를 상수 c로 고정으로 갖는다.
