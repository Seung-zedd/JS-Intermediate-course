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

const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype = {
  constructor: Bmw,
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
x5.getColor();
