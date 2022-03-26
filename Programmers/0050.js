// 최대공약수와 최소공배수
// 유클리드 호제법
function solution(n, m) {
  const a = n;
  const b = m;
  let temp;

  while(n) {
    temp = m % n;
    m = n;
    n = temp;
  }

  return [m, (a*b) / m];
}

 console.log(solution(2, 5));