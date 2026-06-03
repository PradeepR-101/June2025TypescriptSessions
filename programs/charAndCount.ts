// program input:aabbbccccabc output: a2b3c4a1b1c1

function encode(input: string): string {
  if (!input) return "";
 
  let result = "";
  let count = 1;
 
  for (let i = 1; i <= input.length; i++) {
    if (i < input.length && input[i] === input[i - 1]) {
      count++;
    } else {
      result += input[i - 1] + count;
      count = 1;
    }
  }
 
  return result;
}
 
const input = "aabbbccccabc";
const output = encode(input);
console.log(`Input:  ${input}`);
console.log(`Output: ${output}`);