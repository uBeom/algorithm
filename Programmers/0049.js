// 소수 만들기
function solution(nums) {
  let answer=0;

  for(let i=0, length=nums.length; i<length; i++) {
    for(let j=i+1; j<length; j++) {
      for(let k=j+1; k<length; k++) {
        const sum = nums[i]+nums[j]+nums[k];
        for(let l=2; l<=Math.sqrt(sum); l++) {
          if (sum%l===0) break;
          else {
            if(l===parseInt(Math.sqrt(sum))) answer++;
          }
        }
      }
    }
  }
  
  return answer;
}

 console.log(solution([1,2,3,4]));