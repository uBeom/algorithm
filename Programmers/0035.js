// 신규 아이디 추천
function solution(new_id) {
  let newId = new_id.toLowerCase().replace(/[^a-z\d\.\-\_]/g, '').replace(/\.{2,}/g, '.').replace(/^\./, '').replace(/\.$/, '');

  if(!newId.length) newId='a';
  
  if(newId.length >= 16) newId = newId.substring(0, 15).replace(/\.$/, '');
  
  while(newId.length <= 2) newId += newId.slice(-1);
  
  return newId;
}

 console.log(solution("...!@BaT#*..y.abcdefghijklm"));