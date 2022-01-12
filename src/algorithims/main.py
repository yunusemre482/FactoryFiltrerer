from collections import defaultdict
import json
from heapq import heappush, heappop

# Opening JSON file
f = open('graph.json')

# returns JSON object as
# a dictionary
data = json.load(f)


def generateDirectedGraph(edges):
    graph = defaultdict(dict)

    for var in edges:
        graph[var['start']][var['end']] = var['weight']
    return graph

    UCS(graph, '66', '16')


weighted_edges = [['a', 'b', 6], ['a', 'c', 3], ['b', 'c', 1], ['c', 'b', 4], ['b', 'd', 2], ['c', 'd', 8],
                  ['c', 'e', 2], ['d', 'e', 9], ['e', 'd', 7]]
directed_weighted_graph = generateDirectedGraph(data)


# Closing file

def UCS(graph, s, goal):
    # define dummy variables for use
    nodesQ = []
    visited_nodes = {}
    prev_nodes = {}

    # using heap for mainitng a queue
    heappush(nodesQ, (0, s, None, 0))
    for nodes in graph:
        visited_nodes[nodes] = False
        prev_nodes[nodes] = None
    i = 0
    # mark all visited and previous nodes False and None
    while len(nodesQ) != 0:
        # pop the least cost node from heap and analyse it
        print("\n", i, "th loop")
        i = i + 1
        print(nodesQ)
        total_cost, current_node, prev_node, link_cost = heappop(nodesQ)
        if visited_nodes[current_node] == False:
            visited_nodes[current_node] = True
            prev_nodes[current_node] = []
            prev_nodes[current_node].append(prev_node)
            prev_nodes[current_node].append(link_cost)
            # if goal return the total route
            if current_node == goal:
                final = []
                while current_node != s:
                    temp = []
                    temp.append(current_node)
                    for i in prev_nodes[current_node]:
                        temp.append(i)
                    final.append(temp)
                    current_node = prev_nodes[current_node][0]
                final.reverse()
                # retrn total cost and final path
                return total_cost, final
            # else explore neighbours
            for neighbors, ncost in graph[current_node].items():
                if visited_nodes[neighbors] == False:
                    this_link_cost = ncost
                    new_cost = total_cost + ncost
                    heappush(nodesQ, (new_cost, neighbors, current_node, ncost))
    # return none if no path found
    return None
    pass
result = UCS(directed_weighted_graph,"66","41")
if result == None:
		print ("\ndistance: infinity\nroute:\nnone\n")
else:
	print( "\ndistance:",result[0],"km\nroute:")
	for line in result[1]:
		print("%s to %s, %s km" % (line[1],line[0],line[2]))
	print ("")
f.close()
