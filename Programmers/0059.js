// 배상 비용 최소화
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(no, works) {
  if (no >= works.reduce((prev, next) => prev + next)) return 0;

  const maxHeap = new MaxHeap();

  works.forEach((work) => maxHeap.push(work));

  for (let i = 0; i < no; i++) maxHeap.push(maxHeap.pop() - 1);

  const result = maxHeap.heap
    .map((work) => Math.pow(work, 2))
    .reduce((prev, next) => prev + next);

  return result;
}

console.log(solution(4, [4, 3, 3]));
