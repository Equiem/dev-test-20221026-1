/* eslint-disable @typescript-eslint/no-magic-numbers */
export const fizzBuzz = (_length: number) => {
  // Place your code here.
  const res: string[] = [];
  for (let i = 1; i <= _length; i++) {
    if (i % 15 === 0) {
      res.push("FizzBuzz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else {
      res.push(i.toString());
    }
  }
  return res.join();
};
