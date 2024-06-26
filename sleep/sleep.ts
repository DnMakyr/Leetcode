/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/

async function sleep(millis: number): Promise<void> {
  //await new Promise((resolve) => setTimeout(resolve, millis)); or
  return new Promise<void>((resolve) => {
    setTimeout(resolve, millis);
  });
}
let start = Date.now();
sleep(1000).then(() => {
  console.log(Date.now() - start);
});
