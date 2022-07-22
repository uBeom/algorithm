// 보석 쇼핑
function solution(gems) {
  let answer = [0, Number.MAX_SAFE_INTEGER];
  let left = 0;
  let right = 0;

  const gemsKinds = new Set(gems).size;
  const collect = new Map();
  collect.set(gems[0], 1);

  while (left < gems.length && right < gems.length) {
    if (collect.size === gemsKinds) {
      if (answer[1] - answer[0] > right - left) answer = [left + 1, right + 1];

      collect.set(gems[left], collect.get(gems[left]) - 1);

      if (collect.get(gems[left]) === 0) collect.delete(gems[left]);

      left++;
    } else {
      right++;
      collect.set(gems[right], (collect.get(gems[right]) || 0) + 1);
    }
  }

  return answer;
}

console.log(solution(["XYZ", "XYZ", "XYZ"]));
