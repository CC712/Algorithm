import re
import numpy as np


class Solution:
    def solveEquation(self, equation):
        """
        :type equation: str
        :rtype: str
        """
        print('input', equation)
        equals = equation.split('=')
        l = equals[0]
        r = equals[1]
        a = self.filter(l)
        b = self.filter(r)
        c = a[1] - b[1]
        factor = a[0] - b[0]
        if factor == 0 and c == 0:
            return 'Infinite solutions'
        if factor == 0:
            return 'No solution'
        return "x=%d" % (-1 * c/factor)

    def filter(self, expression):
        factors = 0
        c = 0
        for tf in re.findall(r'([+-])?(\d+)?x', expression):
            # print(tf)
            tp = tf[1]
            if tf[1] == '':
                tp = '1'
            factors += int(tf[0] + tp)
        for tc in re.findall(r'([+-])?(\d+)(?!=x)', expression):
            print(tc)
            c += int(tc[0] + tc[1])
        print([factors, c])
        return [factors, c]


s = Solution()
t = '-99x+5-3-x=6+x-2'
t1 = '2x=x'
t2 = '99x=99'
t3 = 'x=x+2'
t4 = '-x=-1'
suite = [t, t1, t2, t3,t4]
for test in suite:
    print(s.solveEquation(test))
# print(re.findall(r'([+-])?([+-]?\d+)?x',t))
