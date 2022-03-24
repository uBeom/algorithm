// 부족한 금액 계산하기
function solution(price, money, count) {
  let sum = 0;

  for(let i=1; i<=count; i++) sum += price * i;

  if(money-sum > 0) return 0;
  else return sum-money;
}

 console.log(solution(3, 20, 3));