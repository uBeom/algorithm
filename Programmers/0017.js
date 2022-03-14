// 자연수 뒤집어 배열로 만들기
function solution(n) {
  return [...n.toString()].reverse().map(e=>parseInt(e));
}

console.log(solution(12345));