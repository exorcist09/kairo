import java.util.*;

public class TopologicalSort {
    public static List<Integer> topologicalSort(List<Integer> nodes, List<int[]> edges) {
        Map<Integer, Integer> inDegree = new HashMap<>();
        Map<Integer, List<Integer>> graph = new HashMap<>();

        // graph and inDegree Initialize
        for (int node : nodes) {
            inDegree.put(node, 0);
            graph.put(node, new ArrayList<>());
        }

        // Build graph and inDegree
        for (int[] edge : edges) {
            int from = edge[0];
            int to = edge[1];
            graph.get(from).add(to);
            inDegree.put(to, inDegree.get(to) + 1);
        }

        // Queue for nodes with 0 in-degree
        Queue<Integer> queue = new LinkedList<>();
        for (Map.Entry<Integer, Integer> entry : inDegree.entrySet()) {
            if (entry.getValue() == 0) {
                queue.add(entry.getKey());
            }
        }

        List<Integer> sorted = new ArrayList<>();
        while (!queue.isEmpty()) {
            int current = queue.poll();
            sorted.add(current);

            for (int neighbor : graph.get(current)) {
                inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) == 0) {
                    queue.add(neighbor);
                }
            }
        }

        if (sorted.size() != nodes.size()) {
            throw new RuntimeException("Cycle detected or invalid graph");
        }

        return sorted;
    }
}
