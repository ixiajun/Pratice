// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 链接：https://leetcode-cn.com/problems/valid-parentheses

// [{(})] false
// ()[]{} true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    const maps = new Map([
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ])

    let arr = s.split('');
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // 左括号推进栈
        if (maps.get(item)) {
            stack.push(item)
        } else {
            // 如果栈的栈顶和右括号不匹配则直接返回字符串无效，否则栈顶推出继续匹配下一个
            if (item !== maps.get(stack[stack.length - 1])) {
                return false
            }
            stack.pop();
        }
    }

    return !stack.length
};

console.log(isValid('[{(})]'))
