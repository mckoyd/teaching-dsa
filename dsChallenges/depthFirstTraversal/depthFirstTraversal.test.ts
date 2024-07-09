import { TreeNode } from "../treeNode/treeNode";
import { depthFirstTraversal } from "./depthFirstTraversal";

describe("Depth First Traversal", () => {
  test("Should perform depth-first traversal on the binary tree", () => {
    // Creates binary tree
    const root = new TreeNode("a");
    const nodeB = new TreeNode("b");
    const nodeC = new TreeNode("c");
    const nodeD = new TreeNode("d");
    const nodeE = new TreeNode("e");
    const nodeF = new TreeNode("f");

    root.left = nodeB;
    root.right = nodeC;
    nodeB.left = nodeD;
    nodeB.right = nodeE;
    nodeC.left = nodeF;

    expect(depthFirstTraversal(root)).toEqual(["a", "b", "d", "e", "c", "f"]);
  });

  test("Should return an empty array for an empty tree", () => {
    expect(depthFirstTraversal(null)).toEqual([]);
  });

  test("Should handle a tree with only the root node", () => {
    const root = new TreeNode("root");
    expect(depthFirstTraversal(root)).toEqual(["root"]);
  });
});
