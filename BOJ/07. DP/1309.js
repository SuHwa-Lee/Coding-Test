// 동물원

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number)[0];

function solution() {
  let answer;
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[1] = 3;
  dp[2] = 7;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 2] * 3 + (dp[i - 1] - dp[i - 2]) * 2) % 9901;
  }

  answer = dp[N];
  return answer;
}

console.log(solution());
