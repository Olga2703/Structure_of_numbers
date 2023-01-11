const getUniqueCombination = (l, sum, K, local, A, res) => {
  if (sum === K) {
    res.push([...local]);
    return;
  }

  for (let i = l; i < A.length; i++) {
    if (sum + A[i] > K) break;
    if (i > l && A[i] === A[i - 1]) continue;
    local.push(A[i]);
    getUniqueCombination(i + 1, sum + A[i], K, local, A, res);
    local.pop();
  }
};
const getStructureOfNumbers = (arrayNumbers, number) => {
  arrayNumbers.sort((item1, item2) => item1 - item2);
  let local = [];
  const result = [];
  getUniqueCombination(0, 0, number, local, arrayNumbers, result);
  return result;
};

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const number = 8;

console.log(getStructureOfNumbers(arrayNumbers, number));
