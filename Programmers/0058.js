// 스킬 체크 테스트 Level.1
function solution(numbers) {
  const counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  numbers.forEach((num) => counter[num]++);

  const answer = counter.reduce((prev, cur, index) => {
    if (cur === 0) return prev + index;

    return prev;
  }, 0);
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
