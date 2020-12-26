// In order to avoid collisions, we should use prime lengths

function hash(key, arrayLen) {
  let total = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }

  return total;
}
 