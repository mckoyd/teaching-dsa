import { TreeNode } from "../treeNode/treeNode";

export const depthFirstTraversalRecursive = (root: TreeNode | null) => {
  if (!root) {
    return [];
  }

  const result: any[] = [];

  const traverseTree = (currentNode) => {
    if (currentNode !== null) {
      result.push(currentNode.value);
      traverseTree(currentNode.left);
      traverseTree(currentNode.right);
    }
  };

  traverseTree(root);

  return result;
};
