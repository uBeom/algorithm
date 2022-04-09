// 베스트앨범
function solution(genres, plays) {
  const answer = [];
  const map = new Map();
  const set = new Set();

  const list = plays.map((e, i) => [genres[i], e, i]);
  list.sort((a, b) => b[1] - a[1]);

  genres.forEach(e => set.add(e));

  const setArr = Array.from(set);
  const sequence = Array.from({length: setArr.length}, (_, i) => [setArr[i], 0]);

  genres.forEach((e, i) => sequence[setArr.indexOf(e)][1] += plays[i]);
  sequence.sort((a, b) => b[1]-a[1]);

  list.forEach(e => {
    if(!map.has(e[0])) map.set(e[0], [[e[1], e[2]]]);
    else map.get(e[0]).push([e[1], e[2]]);
  });
  
  sequence.forEach(e => {
    if(map.get(e[0]).length === 1) answer.push(map.get(e[0])[0][1]);
    else {
      for(let i=0; i<2; i++)
        answer.push(map.get(e[0])[i][1]);
    }
  });

  return answer;
}

 console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));