function main() {
  console.log('main');

  let rootNodes = [
    {
      id: 1,
      name: 1,
      nodes: [
        {
          id: 2,
          name: 2,
          nodes: [
            {
              id: 3,
              name: 3,
              nodes: []
            },
            {
              id: 4,
              name: 4,
              nodes: []
            }                        
          ]
        },
        {
          id: 22,
          name: 22,
          nodes: []
        }
      ]
    }
  ];

  let ret = [];
  recycle(ret, rootNodes);
  console.log(ret);
}

function recycle(ret, nodes) {
  for (let node of nodes) {
    console.log(node)
    if (node.nodes.length > 0) {
      recycle(ret, node.nodes)
    }
    else {
      ret.push(node.name);
    }
  }
}

main();