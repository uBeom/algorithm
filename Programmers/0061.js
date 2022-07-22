// 소수 찾기
function solution(n) {
  const prime = [false, false, ...Array.from({ length: n - 1 }, () => true)];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= n; j += i) prime[j] = false;
    }
  }

  return prime.filter(Boolean).length;
}

console.log(solution(10));
