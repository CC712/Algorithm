# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from Utils import pyUtils as utils
root = utils.root


class Solution:
    def rob(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None or root.val == None:
                return 0
        ans = max(self.recursive(root, root.val, True),
                  self.recursive(root, 0, False))
        print('ans', ans)
        return ans

    def recursive(self, node, ans, lastChoosen):
        # print(ans,lastChoosen)
        if node == None or node.val == None:
            return 0
        # print(node.val)
        getThis = ans
        noGetThis = ans
        v = int(node.val) or 0
        l = node.left
        r = node.right
        if lastChoosen:
            getThis = ans + \
                self.recursive(l, ans, False) + \
                self.recursive(r, ans, False)
        else:
            p1 = self.rob(l)
            p2 = self.rob(r)
            print(p1, p2, ans)
            noGetThis = ans + max(p1, p2)
        a = max(getThis, noGetThis)
        print('mid:',a)
        return a


s = Solution()
s.rob(root)
