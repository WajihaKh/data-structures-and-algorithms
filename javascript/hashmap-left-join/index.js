function leftJoin(hashmap1, hashmap2) {
  let result = [];

  for (let key in hashmap1) {
    let row = [];

    row.push(key);
    row.push(hashmap1[key]);
    row.push(hashmap2[key] || null);

    result.push(row);
  }

  return result;
}

module.exports = leftJoin;
