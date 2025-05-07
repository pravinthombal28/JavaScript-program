/*
Count Digits Divisible by 3
Description: Write a program to count the digits divisible by 3 in a number.
Input: n = 123456


Output: 2
*/

let num=123456,count=0;
for(let i=1;i<=num;i++)
{
	let rem=num%10;
	if(rem%3==0)
	{
		count++;
	}
	num=parseInt(num/10);
}
console.log(count);