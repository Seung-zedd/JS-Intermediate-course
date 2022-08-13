//setTimeout:일정 시간이 지난 후 함수를 실행
//setInterval:일정 시간 간격으로 함수를 반복
/***************************
 * setTimeout 함수(fn,ms,"이름")
 * clearTimeout(tId);//tId를 실행시키지 않는다.
 *****************************/
// (1):함수명을 밝히고 싶으면 이렇게 쓰자.
//  function fn() {
//   console.log(3);
// }

// setTimeout(fn, 3000);

// //(2):이렇게 사용할 수도 있다.
// setTimeout(() => {
//   console.log(3);
// }, 3000); //1000 = 1초

// const tId = setTimeout(
//   (name) => {
//     console.log(name);
//   },
//   5000,
//   "Mike"
// );
// clearTimeout(tId);//mike 뜨지 않음

/***********************
 * setInterval 함수
 ***********************/

let num = 0;

function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 3) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
