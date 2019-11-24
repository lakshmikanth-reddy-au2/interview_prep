var findMedianSortedArrays = function(nums1, nums2) {
    let i1 = i2 = 0;
    let smallest, valBefore;
    const pivot = Math.floor((nums1.length + nums2.length) / 2);
    while (nums1[i1] || nums2[i2]) {
      smallest = (nums2[i2] === void 0 || nums1[i1] < nums2[i2])
        ? nums1[i1++]
        : nums2[i2++];
      if ((nums1.length + nums2.length) % 2) {
        if (pivot === i1 + i2 - 1) {
          return smallest;
        }
      } else {
        if (pivot - 1 === i1 + i2 - 1) {
          valBefore = smallest
        }
        if (pivot === i1 + i2 - 1) {
          return (smallest + valBefore) / 2;
        } 
      }
    }
  };