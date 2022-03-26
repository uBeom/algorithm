// [카카오 인턴] 키패드 누르기
function solution(numbers, hand) {
  let answer = '';
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
  ];

  let left = [3, 0];
  let right = [3, 2];
  let coordinate;

  numbers.forEach(e=>{
    if(e===1 || e=== 4|| e===7) {
      answer+='L';
      if(e===1) left = [0, 0];
      else if(e===4) left = [1, 0];
      else if(e===7) left = [2, 0];
    }
    else if(e===3 || e===6 || e===9) {
      answer+='R';
      if(e===3) right = [0, 2];
      else if(e===6) right = [1, 2];
      else if(e===9) right = [2, 2];
    }
    else {
      if(e===0) coordinate = [3, 1];
      else if(e < 4) coordinate = [0, keypad[0].indexOf(e)];
      else if(e < 7) coordinate = [1, keypad[1].indexOf(e)];
      else if(e < 10) coordinate = [2, keypad[2].indexOf(e)];

      const leftNum = Math.abs(coordinate[0]-left[0]) + Math.abs(coordinate[1]-left[1]);
      const rightNum = Math.abs(coordinate[0]-right[0]) + Math.abs(coordinate[1]-right[1]);
      
      if(leftNum === rightNum) {
        if(hand === 'right') {
          answer += 'R';
          right = [coordinate[0], coordinate[1]];
        }
        else if(hand === 'left') {
          answer += 'L';
          left = [coordinate[0], coordinate[1]];
        }
      }
      else if(leftNum < rightNum) {
        answer += 'L';
        left = [coordinate[0], coordinate[1]];
      }
      else if(leftNum > rightNum) {
        answer += 'R';
        right = [coordinate[0], coordinate[1]];
      }
    }
  });

  return answer;
}

 console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));

 // 7 2, 0
 // # 3, 2
// 0 3, 1
 // 7, 0