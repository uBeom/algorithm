// 완주하지 못한 선수
function solution(participant, completion) {
  let answer;
  const completionMap = new Map();

  participant.forEach((e) => {
    if(completionMap.has(e)) completionMap.set(e, completionMap.get(e) + 1);
    else completionMap.set(e, 0);
  });

  completion.forEach((e) => {
    if(!completionMap.get(e)) completionMap.delete(e);
    else completionMap.set(e, completionMap.get(e)-1);
  });

  completionMap.forEach((_, i) => answer=i);

  return answer;
}

 console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));