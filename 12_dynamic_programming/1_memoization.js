// Memoization

// plain recursion (1.6 ** n complexity)
const fibPlain = (n) => {
    if (n <= 2) return 1;
    return fib(n - 2) + fib(n - 1);
};

// Memoization to avoid repetition (Complexity O(n))

function fibMemoized(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fibMemoized(100));
