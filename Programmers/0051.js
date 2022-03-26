// 실패율
function solution(N, stages) {
  const arr = [];
  for(let i=1, length=N; i<=length; i++) {
    let cnt = 0;
    let length = stages.length;
    for(let j=stages.length-1; j>=0; j--) {
      if(stages[j] === i) {
        stages.splice(j, 1);
        cnt++;
      }
    }
    arr.push([i, cnt/length]);
  }
  arr.sort((a, b)=> b[1]-a[1]);
  
  const answer = [];
  for(let [stage, failureRate] of arr) answer.push(stage);

  return answer;
}

 console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));