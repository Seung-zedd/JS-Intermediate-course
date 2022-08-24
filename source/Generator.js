/*********************
 * Generator:함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
 * @ yield에서 함수의 실행을 멈춤, done을 반환하는데, 실행이 끝났으면 true, 아니면 false
 * @ next():yield를 순차적으로 실행, 끝나면 done:true
 * @ return():즉시 return문을 반환하고 done:true
 * @ throw():예외문을 발생시키고 {value:undefined, done:true}
 * 배열과 string은 iterable한 객체
 ******************************/

function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}

const a = fn();

/********************
 * next()에 인수 전달
 ********************/

function* num() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);
  return num1 + num2;
}

const a = num();
a.next();//"첫번째 숫자를 입력해주세요"
a.next(4);//4, "두번째 숫자를 입력해주세요"
a.next(7);//11

/********************
 * Generator는 값을 미리 만들어 두지 않아서 메모리 절약이 가능
 ********************/

function* fn() {
  let index = 0;
  while (true) {
    console.log(index);
    yield index++;
  }
}

const a = fn();

a.next(); //next메소드를 계속 호출하면 0,1,2,3,4 ...가 나옴

/********************
 * yield*를 이용해서 다른 generator 호출 가능
 * spread syntax(...)로 true값이 나올때까지 반환 
 **********************/

function* gen1() {
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello,";
  yield* gen1();
  yield "!";
}

console.log(...gen2());
