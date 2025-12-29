class Solution:
    def longestSubarray(self, arr, k):  
        # code here
        preSumMap = {0: -1}
        prefixSum = 0
        maxLen = 0

        for i, num in enumerate(arr):
            prefixSum += num
            rem = prefixSum - k

            if rem in preSumMap:
                maxLen = max(maxLen, i - preSumMap[rem])

            if prefixSum not in preSumMap:
                preSumMap[prefixSum] = i

        return maxLen
    
