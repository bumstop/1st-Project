// function solution(x, n) {
//   var answer = [];

//   for (let i = 1; i <= n; i++) {
//     answer.push(x * i);
//   }

//   return answer;
// }

// async function delay(ms) {
//   setTimeout(() => {
//     console.log(`${ms} 밀리초가 지났습니다.`);
//   }, ms);
// }
// async function main() {
//   await delay(1000);
//   await delay(2000);
//   // const result = await Promise.resolve("끝");
//   // console.log("끝");
// }

// 메인 함수 호출
// main();

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: {
    // size는 여기,
    width,
    height,
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu", // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

let {size, items} = options;

console.log(size);
