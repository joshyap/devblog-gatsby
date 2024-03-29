---
title: "FizzBuzz Ternary"
description: "Taking another look at fizzbuzz with ternary operators"
---

My younger brother recently completed a technical interview over Zoom due to the current shelter-in-place situation in the US. They were basically asking for a classic fizzbuzz solution, but simply used a different name.

It was simple to do if you knew basic programming, but especially so if you already knew the fizzbuzz problem. My brother solved it in a very straightforward way that had no flaws. We discussed his solution afterwards and I recommended that he talk through his solution more and what considerations he took into account. This is how you show the interviewer your thought process.

For example, my brother solved the problem in a few minutes, but did not think to offer suggestions on alternative things he could do to solve the problem. He showcased a for loop with some modulus operators, but did not acknowledge that he could have used a switch statement, a recursive function, or a ternary operator. I wasn't that surprised that he didn't suggest a ternary solution though since our conversation was the first time he had ever heard of it!

Admittedly, I was programming for nearly a year before I learned about ternary operators. I still don't use them because, in my opinion, any advantages that gain from brevity are outweighed by the loss in readability for anyone that is unfamiliar.

<br>
Here is my proposed fizzbuzz solution using a ternary operator:

```i % 15 ? i % 5 i % 3 ? i:"fizz":"buzz":"fizzbuzz")```