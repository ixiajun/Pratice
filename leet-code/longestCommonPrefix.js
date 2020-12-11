// 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 说明:
// 所有输入只包含小写字母 a-z 。
// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return '';
    if (strs.length === 1) return strs[0];

    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let index = 0;
        let flag = true;
        while (flag && index < res.length && index < strs[i].length) {
            if (res[index] !== strs[i][index]) {
                flag = false;
            } else {
                index++
            }
        }
        res = res.substring(0, index);
        if (!res) {
            return ''
        }
    }
    return res
};

console.log(longestCommonPrefix([]))