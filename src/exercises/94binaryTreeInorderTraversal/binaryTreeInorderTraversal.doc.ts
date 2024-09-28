// Grafo Vs Binary Tree
// representar un arbol binario en un array, ventajas desventajas, es posible?
// 94. Binary Tree Inorder Traversal

// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
//Tree Traversal Techniques

//#1 Inorder Traversal (Left, Root, Right):

// This type of traversal visits the left subtree first, then the root node, and finally the right subtree.
// If the binary tree is a Binary Search Tree (BST), inorder traversal will visit the nodes in ascending order.
// Process:
// Traverse the left subtree.
// Visit the root node.
// Traverse the right subtree.

// #2 Preorder Traversal (Root, Left, Right):

// In preorder traversal, you first visit the root, then the left subtree, and finally the right subtree.
// This type of traversal is used when you need to make decisions about nodes before inspecting their children (e.g., copying a tree).
// Process:
// Visit the root node.
// Traverse the left subtree.
// Traverse the right subtree.

// #3 Postorder Traversal (Left, Right, Root):

// In postorder traversal, you visit the left subtree first, then the right subtree, and finally the root node.
// This method is useful for situations like deleting a tree where you need to delete the children before the parent.
// Process:
// Traverse the left subtree.
// Traverse the right subtree.
// Visit the root node.

//#4 Level-order Traversal (Breadth-First-Search):

// In level-order traversal, also called breadth-first traversal, you visit all nodes at each level of the tree, starting from the root and working down level by level.
// This is useful when you want to inspect or operate on nodes layer by layer.
// Process:
// Visit all nodes at depth 0 (root level).
// Visit all nodes at depth 1 (children of the root).
// Continue visiting nodes level by level.

//Heap Data Structure
//https://www.geeksforgeeks.org/heap-data-structure/
