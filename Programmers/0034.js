// 두 개 뽑아서 더하기
function solution(numbers) {
  const sumList = [];
  for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      sumList.push(numbers[i]+numbers[j]);
    }
  }
  const answer = [...new Set(sumList)];
  return answer.sort((a, b) => a-b);
}

 console.log(solution([2,1,3,4,1]));