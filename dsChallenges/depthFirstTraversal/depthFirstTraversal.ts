import { TreeNode } from "../treeNode/treeNode";

export const depthFirstTraversal = (root: TreeNode | null): any[] => {
  if (!root) {
    return [];
  }

  const result: any[] = [];
  const tempStack: TreeNode[] = [];

  tempStack.push(root);

  while (tempStack.length) {
    const current = tempStack.pop();
    if (current) result.push(current.value);

    if (current && current.right) tempStack.push(current.right);
    if (current && current.left) tempStack.push(current.left);
  }

  return result;
};
