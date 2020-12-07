// 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 示例 4:
// 输入: s = ""
// 输出: 0

/**
 * @param {string} s
 * @return {number}
 */

// 思路  滑动窗口 往右边滑动时  如果找到重复的字符 将当前的字符串未重复部分截下来并与之前的字符串比较并比较长度，返回最大的长度值
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        let index = str.indexOf(s[i])
        if (index > -1) {
            str = str.substring(index + 1, str.length)
        }
        str += s[i];
        max = Math.max(str.length, max)
    }
    return max
};

console.log(lengthOfLongestSubstring(''))