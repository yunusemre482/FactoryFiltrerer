function uninformCost(graph,start,end){
    let lowestPaths=Object.assign({[end]:Infinity},graph[start])
    let lowestPathsParents={[end]:null}
    for(let element in graph[start]){
      lowestPathsParents[element]=start;
    }
    let visited=[]
    let node = findCheapest(lowestPaths,visited)
      while(node){
          let path = lowestPaths[node];
          let neighbors = graph[node]
          for(let neighbor in neighbors){
              let newPath = path + neighbors[neighbor]
              if(!lowestPaths[neighbor]||lowestPaths[neighbor]>newPath){
                  lowestPaths[neighbor]= newPath
                  lowestPathsParents[neighbor]= node;
              }
          }
          visited.push(node)
          node = findCheapest(lowestPaths,visited)
      }
    let finalAnswer = [end];
    let parent = lowestPathsParents[end]
    while(parent!=start){
        finalAnswer.unshift(parent)
        parent=lowestPathsParents[parent]
    }
    finalAnswer.unshift(start)
    let bestPath ={
        path: finalAnswer,
        cost: lowestPaths[end]
    }
    return bestPath 
  }
  
  function findCheapest(lowestPaths,visited){
      let nodes=Object.keys(lowestPaths)
      let lowestNodes=nodes.reduce((lowest,node)=>{
          if(lowest==null&&!visited.includes(node)) lowest=node;
          if(lowestPaths[lowest]>lowestPaths[node]&&!visited.includes(node)) lowest=node;
          return lowest
      },null)
      return lowestNodes
  }


  