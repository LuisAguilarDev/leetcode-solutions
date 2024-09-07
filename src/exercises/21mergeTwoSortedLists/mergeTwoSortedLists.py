# Gino's aproach
class ListNode:
    def __init__(self, val: int = 0, next: 'ListNode' = None):
        self.val = val
        self.next = next

def merge2(l1: ListNode, l2: ListNode) -> ListNode:
    if not l1: return l2
    if not l2: return l1

    # initial node for the merged list
    if l1.val <= l2.val:
        head, l1 = l1, l1.next
    else:
        head, l2 = l2, l2.next
    
    cur = head
    
    while l1 and l2:
        if l1.val <= l2.val:
            cur.next, l1 = l1, l1.next
        else:
            cur.next, l2 = l2, l2.next
        cur = cur.next
    
    if l1:
        cur.next = l1
    elif l2:
        cur.next = l2
    
    return head

def merge3(l1: ListNode, l2: ListNode) -> ListNode:
    # Initialize pointers for the new merged list
    l3, cur3 = None, None
    
    # Traverse both lists and merge them
    while l1 and l2:
        if l1.val <= l2.val:
            if l3 is None:
                l3 = l1
                cur3 = l3
            else:
                cur3.next = l1
                cur3 = cur3.next
            l1 = l1.next
        else:
            if l3 is None:
                l3 = l2
                cur3 = l3
            else:
                cur3.next = l2
                cur3 = cur3.next
            l2 = l2.next
    
    # Attach the remaining nodes from either l1 or l2
    if l1:
        if l3 is None:
            l3 = l1
        else:
            cur3.next = l1
    elif l2:
        if l3 is None:
            l3 = l2
        else:
            cur3.next = l2

    return l3

def listnode_to_list(node: ListNode) -> list:
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

def test_merge3():
    # Create the first list: 1 -> 3 -> 5
    l1 = ListNode(1, ListNode(3, ListNode(5)))

    # Create the second list: 2 -> 4 -> 6
    l2 = ListNode(2, ListNode(4, ListNode(6)))

    # Expected result: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    expected_result = [1, 2, 3, 4, 5, 6]

    # Call the merge3 function
    merged_list = merge3(l1, l2)

    # Convert the resulting merged list into a Python list
    result = listnode_to_list(merged_list)
    # Use assert to verify that the merged list matches the expected result
    assert result == expected_result, f"Expected {expected_result}, but got {result}"

def test_merge2():
    # Create the first list: 1 -> 3 -> 5
    l1 = ListNode(1, ListNode(3, ListNode(5)))

    # Create the second list: 2 -> 4 -> 6
    l2 = ListNode(2, ListNode(4, ListNode(6)))

    # Expected result: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    expected_result = [1, 2, 3, 4, 5, 6]

    # Call the merge3 function
    merged_list = merge2(l1, l2)

    # Convert the resulting merged list into a Python list
    result = listnode_to_list(merged_list)
    # Use assert to verify that the merged list matches the expected result
    assert result == expected_result, f"Expected {expected_result}, but got {result}"
# Run the test
test_merge3()
