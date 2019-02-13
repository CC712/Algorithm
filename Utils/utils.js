class utils {
    createBTree(params) {
        class node {
            constructor(val, left = null, right = null) {
                this.val = val;
                this.left = left;
                this.right = right;
            }
        }
        //生成树 [2,1,3] 中序生成
        let s = [];
        s = params.map(v => (v != null ? new node(v) : v));
        let res = s[0];
        let t = [];
        //how to comfirm i am operating the right root ?

        while (s.length) {
            let n = s.shift();
            n.left = s.shift();
            n.right = s.shift();
            t.push(n.left);
            t.push(n.right);
            // current level nodes , when all this level node are linked to tree , t will be empty
            while (t.length) {
                n = t.shift();
                if (n) {
                    n.left = s.shift();
                    n.right = s.shift();
                    t.push(n.left, n.right);
                }
            }
        }
        return res;
    }
    //test function
    runTest(fn, args, ans) {
        let c = 0;
        while (c < args.length) {
            if (ans) {
                let _ans = ans(args[c]);
                console.time(c);
                let _fn = fn(args[c]);
                console.log(`test-${c}:    ${_ans == _fn }    now :${_fn } expect:  ${_ans}`);
                console.timeEnd(c);
            } else {
                console.time(c);
                console.log(`test-${c}:   now:  ${fn(args[c])}`);
                console.timeEnd(c);
            }
            c++;
        }
        console.log(`${fn.name} test end \n`);
    }
}
const u = new utils();
module.exports = u;