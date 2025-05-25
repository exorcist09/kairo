const topologicalSort = (nodes, edges) => {
  // BFS--> Kahn algorithm
  // topologicalsort function accepts node and edges and sorts them in order to have starting and ending node and get level nodes  between them,
  // StartingNode -> is one in which no edge enters and EndingNode is one from which node edge leaves

  const inDegree = new Map();
  const graph = new Map();

  // Initialize graph and inDegree
nodes.forEach((node) => {
  inDegree.set(node.id, 0);
  graph.set(node.id, []);
});


  // Build graph and inDegree
edges.forEach(({ source, target }) => {
  graph.get(source).push(target);
  inDegree.set(target, inDegree.get(target) + 1);
});

  // Queue for nodes with 0 in-degree
  const queue = [];
  for (const [node, degree] of inDegree.entries()) {
    if (degree === 0) queue.push(node);
  }

  const sorted = [];
  while (queue.length) {
    const current = queue.shift();
    sorted.push(current);

    for (const neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  if (sorted.length !== nodes.length) {
    throw new Error("Cycle detected or invalid graph");
  }

  return sorted;
};

module.exports = topologicalSort;
