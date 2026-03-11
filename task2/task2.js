// Task 2 implementation: sumTopTwo
function sumTopTwo(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let max1 = -Infinity, max2 = -Infinity;
  for (const n of arr) {
    const v = Number(n) || 0;
    if (v >= max1) {
      max2 = max1;
      max1 = v;
    } else if (v > max2) {
      max2 = v;
    }
  }
  return max1 + max2;
}

module.exports = { sumTopTwo };
