// 위장
function solution(clothes) {
  let answer = 0;
  const map = new Map();

  clothes.forEach(e => {
    if(map.has(e[1])) map.set(e[1], map.get(e[1])+1);
    else map.set(e[1], 2);
  });

  answer = Array.from(map).reduce((acc, cur) => acc * cur[1], 1) - 1;
  
  return answer;
}

 console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));