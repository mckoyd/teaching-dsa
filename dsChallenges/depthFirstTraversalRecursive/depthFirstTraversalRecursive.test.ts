import { TreeNode } from "../treeNode/treeNode";
import { depthFirstTraversalRecursive } from "./depthFirstTraversalRecursive";

const root = new TreeNode("a");
root.left = new TreeNode("b");
root.right = new TreeNode("c");
root.left.left = new TreeNode("d");
root.left.right = new TreeNode("e");
root.right.left = new TreeNode("f");

test("Depth First Traversal", () => {
  expect(depthFirstTraversalRecursive(root)).toEqual([
    "a",
    "b",
    "d",
    "e",
    "c",
    "f",
  ]);
});
