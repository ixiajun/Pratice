// 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 提示：
// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res = [];
    let temp = 0;
    let i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || temp != 0) {
        let x = num1[i] ? Number(num1[i]) : 0;
        let y = num2[j] ? Number(num2[j]) : 0;
        let result = x + y + temp;
        temp = Math.floor(result / 10);
        res.push(result % 10);
        i -= 1;
        j -= 1;
    }

    return res.reverse().join('');
};

console.log(addStrings('123', '321'))