// 로또의 최고 순위와 최저 순위
function distinctionRanking(trueNum) {
  switch (trueNum) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;                    
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  lottos.sort((a, b) => a-b);
  win_nums.sort((a, b) => a-b);

  const same = lottos.every((_, i) => lottos[i] === win_nums[i]);
  if(same) return [1, 1];

  const zeroCnt = lottos.filter((_, i) => lottos[i] === 0).length

  let minimum = 0;
  for(let i=0, length=lottos.length; i<length; i++) {
    for(let j=0, length=win_nums.length; j<length; j++) {
      if(lottos[i] === win_nums[j]) minimum++;
    }
  }
  const maximum = minimum+zeroCnt;

  const answer = [];

  answer.push(distinctionRanking(maximum));
  answer.push(distinctionRanking(minimum));

  return answer;
}

console.log(solution([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]));