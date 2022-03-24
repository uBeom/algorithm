// 약수의 개수와 덧셈
function solution(left, right) {
  let sum = 0;

  for(let i=left; i<=right; i++) {
    const measure = [];

    for(let j=1; j<=i; j++)
      if(i%j === 0) measure.push(j);

    if(measure.length%2) sum-=i;
    else sum+=i;
  }

  return sum;
}

 console.log(solution(13, 17));