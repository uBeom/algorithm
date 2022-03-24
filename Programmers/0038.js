// 폰켓몬
function solution(nums) {
  let answer = 0;
  let pickCnt = parseInt(nums.length/2);
  const monArr = Array.from(new Set(nums));

  for(let i=0; i<pickCnt; i++) {
    if(monArr[i]) answer++;
    else break;
  }

  return answer;
}

 console.log(solution([3,3,3,2,2,2]));