class Solution {
    longestSubarray(arr, k) {
        let preSumMap = new Map(); // prefixSum -> first index
        let prefixSum = 0;
        let maxLen = 0;

        for (let i = 0; i < arr.length; i++) {
            prefixSum += arr[i];

            // Case 1: subarray from 0 to i
            if (prefixSum === k) {
                maxLen = i + 1;
            }

            // Case 2: subarray exists ending at i
            if (preSumMap.has(prefixSum - k)) {
                let len = i - preSumMap.get(prefixSum - k);
                maxLen = Math.max(maxLen, len);
            }

            // Store FIRST occurrence only
            if (!preSumMap.has(prefixSum)) {
                preSumMap.set(prefixSum, i);
            }
        }

        return maxLen;
    }
}
