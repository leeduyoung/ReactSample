function main() {
  console.log("main start");

  console.time("sumFunction");
  sum(1, 1000000);
  console.timeEnd("sumFunction");

  /**
   * OUTPUT 
   * - PC의 상태에 따라 차이가 있을 수 있습니다.
   * 
   * $ main start
   * $ sumFunction: 4.050ms
   */  
}

/**
 * 정수 a부터 b까지 더한값을 리턴하는 함수
 * @param {*} a 
 * @param {*} b 
 */
function sum(a, b) {
  let sum = 0;
  for (let i = a; i < b; i++) {
    sum += i;
  }

  return sum
}

main();