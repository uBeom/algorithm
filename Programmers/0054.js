// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  const bridge = Array.from({length: bridge_length }, () => 0);
  time++;
  bridge.shift();
  bridge.push(truck_weights.shift());

  while(bridge.some(e => e)) {
    time++;
    bridge.shift();
    const currentBridgeWeight = bridge.reduce((acc, cur) => acc + cur);

    if(currentBridgeWeight+truck_weights[0] <= weight) bridge.push(truck_weights.shift())
    else bridge.push(0);
  }

  return time;
}

 console.log(solution(2, 10, [7,4,5,6]));