/***************************
 * async는 항상 Promise를 반환
 * await은 async 함수 내부에서만 실행 가능,Promise가 실행될 떄까지
 기다림.
 * throw:예외문을 발생시킴
 *******************************/

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName("Mike"); //
  console.log(result);
}

showName(); //1초 후에 name->"Mike"를 출력

/****************************************
 * Promsie chaining ->async,await으로 변경
 * try{}에서 에러가 나면 에러가 난 시점에 코드의 흐름이 catch블록으로 넘어감.
 * catch:에러에 대한 정보를 담고 있는 객체, 
    catch(e){
    console.log(e)  로 사용가능
    }
 ****************************************/

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
      //   rej(new Error("Err.."));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}

order();

//위의 async,await부분을 Promise.all로 바꿔보자.
console.log("시작");
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}

order();
