const decodeTheRing = function (s, p) {

    // write your code here
function matchHelper(mIndex, pIndex) {
      // If we have exhausted both the message and pattern, it's a match
      if (mIndex === s.length && pIndex === p.length) return true;
      
      // If we have exhausted the pattern but not the message, it's not a match
      if (pIndex === p.length) return false;
  
      // If the current character in the pattern is '*', check two cases:
      // 1. Skip the '*' (move to the next pattern character)
      // 2. Use the '*' to match one or more characters in the message (move to the next message character)
      if (p[pIndex] === '*') {
        return matchHelper(mIndex, pIndex + 1) || (mIndex < s.length && matchHelper(mIndex + 1, pIndex));
      }
  
      // If the current character in the pattern is '?', or the characters match exactly
      if (mIndex < s.length && (p[pIndex] === '?' || p[pIndex] === s[mIndex])) {
        return matchHelper(mIndex + 1, pIndex + 1);
      }
  
      // If none of the above conditions are satisfied, it's not a match
      return false;
    }
    return matchHelper(0, 0);
  };
  
  module.exports = decodeTheRing;
