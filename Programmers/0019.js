// 정수 제곱근 판별
function solution(n) {
  let nSqrt = Math.sqrt(n);
    
  if(Number.isInteger(nSqrt)) {
      nSqrt++;
      return nSqrt**2;
  }
  else return -1;
}

console.log(solution(121));