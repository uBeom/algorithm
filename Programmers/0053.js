// 기능개발
function solution(progresses, speeds) {
  const answer = [];

  while(progresses.length) {
    let cnt = 0;
    progresses = progresses.map((e, i) => e += speeds[i]);
    
    for(let i=0, length=progresses.length; i<length; i++) {
      if(progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        cnt++;
      } else break;
    }

    if(cnt) answer.push(cnt);
  }
  
  return answer;
}

 console.log(solution([93, 30, 55], [1, 30, 5]));