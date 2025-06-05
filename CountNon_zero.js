/*
 Count Non-Zero Digits
Description: Write a program to count the number of non-zero digits in a number.
Input: n = 1203


Output: 3
*/

let n=1203055,count=1;
for(let i=1;i<=n;i++)
{
	let rem=n%10;
	if(rem!=0)
	{
		count++;
	}
	n=~~(n/10);
}
console.log(count);