class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def buildTree(arr):
    res = list(map(lambda a: TreeNode(a), arr))
    for i in range(1, len(res)):
        idx = i - 1
        tmp = res[idx]
        # print(idx,tmp.val)
        if 2*idx + 1 >= len(res):
            continue
        tmp.left = res[2*i - 1]
        tmp.right = res[2*i]
        # print('nodes:',tmp.left.val,tmp.right.val)
    return res[0]


suite = [3, 2, 3, None, 3, None, 1]
root = buildTree(suite)
# print('-----')
# q = [root]
# while q:
#     t = q.pop(0)
#     if t == None: continue
#     print(t.val)
#     q.append(t.left)
#     q.append(t.right)

