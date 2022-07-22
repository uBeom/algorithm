// 자동완성
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.get(char))
        currentNode.children.set(char, new Node(currentNode.value + char));

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.get(char)) return false;

      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  search(string) {
    let currentNode = this.root;
    let count = 0;

    for (const char of string) {
      count++;

      if (currentNode.children.size === 1) return count;

      currentNode = currentNode.children.get(char);
    }

    return count;
  }
}

function solution(words) {
  const trie = new Trie();

  words.forEach((word) => trie.insert(word));
  const arr = words.map((word) => trie.search(word));
  console.log(arr);
}

console.log(solution(["go", "gone", "guild"]));
