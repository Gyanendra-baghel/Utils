class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        this.vertices.set(vertex, []);
    }

    addEdge(from, to) {
        this.vertices.get(from).push(to);
        this.vertices.get(to).push(from)
    }

    bfs(start, target) {
        const queue = [start];
        const visited = new Set();
        const previous = new Map();

        while (queue.length > 0) {
            const current = queue.shift();

            if (current === target) {
                console.log("Found");
                // Path found, reconstruct it
                const path = [target];
                let node = target;
                while (previous.has(node)) {
                    node = previous.get(node);
                    path.unshift(node);
                    break;
                }
                return path;
            }

            for (const neighbor of this.vertices.get(current)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    previous.set(neighbor, current);
                    queue.push(neighbor);
                }
            }
        }
        // Path not Found
        return null;
    }
}

const graph = new Graph();
graph.addVertex('Alice');
graph.addVertex('Bob');
graph.addVertex('Charlie');
graph.addVertex('Dave');
graph.addEdge("Alice", "Bob");
graph.addEdge("Bob", "Charlie");
graph.addEdge("Charlie", "Dave");

const shortestPath = graph.bfs('Alice', "Dave");
console.log(shortestPath);