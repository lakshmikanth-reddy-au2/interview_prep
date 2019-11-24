var searchRange = function(nums, target) {
    if (!nums || nums.length == 0) return [-1, -1];
    if (nums.length == 1) {
        if (nums[0] == target) {
            return [0, 0];
        } else {
            return [-1, -1];
        }
    }
    let len = nums.length;
    let first = 0, last = len - 1, center, find = -1;
    while (first <= last) {
        center = Math.floor((first + last)/2);
        if (nums[center] == target) {
            find = center;
            break;
        } else if (nums[center] > target) {
            last = center - 1;
        } else {
            first = center + 1;
        }
    }
    if (find == -1) return [-1, -1];
    first = find;
    last = find;
    while (first > 0 && nums[first] == nums[first - 1]) first--;
    while (last < len - 1 && nums[last] == nums[last + 1]) last++;
    return [first, last];
};