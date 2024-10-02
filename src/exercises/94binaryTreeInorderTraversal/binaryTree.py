def dfs(root):
    if not root:
        return
    
    stack = [root]
    
    while stack:
        node = stack.pop()
        print(node.value)  # Print the value
        
        # Push right first so left is processed next
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)

            from collections import deque

def bfs(root):
    if not root:
        return
    
    queue = deque([root])
    
    while queue:
        node = queue.popleft()
        print(node.value)  # Print the value
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)