// Task 1 implementation: mostFrequentLengthStrings
function mostFrequentLengthStrings(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const counts = new Map();
  for (const s of arr) {
    const len = typeof s === 'string' ? s.length : 0;
    counts.set(len, (counts.get(len) || 0) + 1);
  }
  let max = 0;
  for (const v of counts.values()) if (v > max) max = v;
  const popularLengths = new Set(
    [...counts.entries()].filter(([k, v]) => v === max).map(([k]) => k)
  );
  return arr.filter(s => popularLengths.has(s.length));
}

module.exports = { mostFrequentLengthStrings };
