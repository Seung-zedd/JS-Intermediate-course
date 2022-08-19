/******************************
 * <Promise는 분기점이다!!>
 * const pr = new Promise((resolve, reject)=>{
 * });
 * new Promise로 생성(state:pending, result:undefined)
 * resolve:성공한 경우 함수를 실행(state:fulfilled, result:value)
 * reject:실패한 경우 함수를 실행(state:rejected, result:error)
 ********************************/

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error.."));
  }, 3000);
}); //3s 후 state:rejected, result:"error.."

const pr = new Promise((res, rej) => {
  setTimeout(() => {
    res("OK");
  }, 3000);
});

pr.then(function (res) {
  console.log(`${res} 가지러 가자`); //"OK"가 res로 들어감
});
pr.catch(function (err) {
  console.log(`다시 주문해주세요`);}); //catch:error가 발생(state:rejected)한 경우에만 실행
/***********************
 * 소비자의 입장에서 씀:then->catch->finally 순
 * pr.then(()=>{})으로 쓴다.
 *왠만해서 then,catch method를 쓸 때, 알아보기 쉽게
 (res)=>console.log(res), (rej)=>console.log(rej)로 쓰자. 
*********************/

// const pr = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(new Error("Error")); //new Error는 Error창을 발생
//   }, 1000);
// });

// console.log("시작");
// pr.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("끝");
//   });

/***************************************
 * Promise를 쓰는 이유:callback hell 방지
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

/*****************************************************
 * Promise.all:배열을 param으로 받는다.
 단, rejected가 이행되서 error가 발생할 경우 그대로 종료
 
 * Promise.race:하나라도 1등으로 완료되면 종료
 ****************************************************/
console.log("시작");
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});

f1() //Promise 중 res("1번 주문 완료")를 return
  .then((res) => f2(res)) //res:"1번 주문 완료"->f2(res->message)->"1번 주문 완료"를 출력 & Promise를 return

  .then((res) => f3(res)) //res:"2번 주문 완료" ->f3(res->message)->"2번 주문 완료"를 출력 & Promise를 return
  .then((res) => console.log(res)) //res:"3번 주문 완료" 를 출력
  .finally(() => console.log("끝")); //끝
