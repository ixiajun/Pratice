// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 链接：https://leetcode-cn.com/problems/palindrome-number


// 12321
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 负数和尾数是0的肯定不是回文数
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false
    
    let reverseNum = 0;

    // eg: 12321   x => 1232 => 123 => 12    reverseNum => 0 => 1 => 12 => 123
    while (x > reverseNum) {
        reverseNum = reverseNum * 10 + x % 10;
        x = Math.floor(x / 10)
    }

    // 如果数字长度是偶数 直接相等， 如果是奇数 去掉多的一位再判断是否相等即回文数
    return reverseNum === x || Math.floor(reverseNum / 10) === x
};

console.log(isPalindrome(123321))