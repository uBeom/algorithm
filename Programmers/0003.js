// 프린터
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  getImportance(value) {
    return this.queue.some(e=>value<e);
  }
}

function solution(priorities, location) {
  let sequence = 0;
  const queue = new Queue();
  priorities.forEach(e=>{
    queue.enqueue(e);
  });

  while(queue.size()) {
    const docs = queue.dequeue();
    
    if(queue.getImportance(docs)) queue.enqueue(docs);
    else {
      sequence++;
      if(location === 0) return sequence;
    }
    
    if(location === 0) location = queue.size()-1;
    else location--;
  }
}

console.log(solution([2, 1, 3, 2], 2));