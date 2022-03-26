// 최소직사각형
function solution(sizes) {
  sizes.sort((a, _) => a[0]-a[1]);

  let aMax = Number.MIN_SAFE_INTEGER;
  let bMax = Number.MIN_SAFE_INTEGER;

  sizes.forEach(e => {
    e.sort((a, b) => a-b);
    if(aMax < e[0]) aMax = e[0];
    if(bMax < e[1]) bMax = e[1];
  });
  
  const answer = aMax * bMax;
  return answer;
}

 console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));