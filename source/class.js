/*******************************************************
 * class와 생성자 함수의 큰 차이점:
 생성자 함수는 new를 안붙이면 undefined를 반환하지만,
 class는 new를 안붙이면 에러가 발생함.
 * class 문법은 constructor 메소드로 생성자 함수 기능을 대신함
 * class method는 for in 문에서 제외됨.
 ***************************************************/

const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const mike = new User("mike", 30);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("tom", 19);

for (const p in mike) {
  console.log(p);////name,age,showName
}

for (const p in tom) {
  console.log(p);//name,age
}

/***************************************************
 * 생성자 함수의 상속은 생성자함수.prototype로 만들지만,
 class에서의 상속은 extends 키워드를 사용
 * class overriding:부모 class와 자식 class의 method명을 동일하게 사용되면,
 덮어쓰게 되어 자식 method만 호출이 됨 -> super.method명으로 부모 class의
 method를 호출 가능.
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
  constructor(color) {
    super(color); //자식 class:super(부모 class의 param) -> constructor,this
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
  stop() {
    super.stop(); //super.method로 부모 class의 method 호출 가능.
    console.log("OFF"); //동일한 이름으로 메소드를 정의하면 덮어쓰게되서 "OFF"가 출력
  }
}

const z4 = new Bmw("blue");
console.log(z4); //Bmw {color: 'blue', wheels: 4, navigation: 1}
z4.drive();
z4.stop();
