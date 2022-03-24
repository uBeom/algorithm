// 비밀지도
function solution(n, arr1, arr2) {
  const answer = Array.from({length: n}, ()=>{
    return Array.from({length: n}, ()=>0);
  });
  
  const arr1Map = arr1.map(e=>e.toString(2).padStart(n, '0').split(''));
  for(let i=0, length=arr1Map.length; i<length; i++) {
    for(let j=0, length=arr1Map[i].length; j<length; j++) {
      if(parseInt(arr1Map[i][j])) answer[i][j]='#';
    }
  }

  const arr2Map = arr2.map(e=>e.toString(2).padStart(n, '0').split(''));
  for(let i=0, length=arr2Map.length; i<length; i++) {
    for(let j=0, length=arr2Map[i].length; j<length; j++) {
      if(parseInt(arr2Map[i][j])) answer[i][j]='#';
    }
  }

  for(let i=0, length=answer.length; i<length; i++) {
    for(let j=0, length=answer[i].length; j<length; j++) {
      if(parseInt(answer[i][j]) === 0) answer[i][j]=' ';
    }
  }

  for(let i=0, length=answer.length; i<length; i++) answer[i] = answer[i].join('');

  return answer;
}

 console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));