// 다리를 지나는 트럭
// 트럭은 다리의 1칸 씩 전진하면 1초이다.
// 트럭이 다리에 올라가는 순서는 정해진 것이다. 바꿀 수 없다. 이게 가장 헷갈리게 했던 조건입니다.

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const startLength = truck_weights.length;
  const pastBridge = [];
  const bridge = [];

  while(startLength !== pastBridge) {
    answer++;
    const truck = truck_weights.shift();

    if(truck_weights.length && truck+truck_weights[0] <= weight) {
      truck.shift();
    }
  }

  return answer;
}

 console.log(solution(100 ,100, [10]));