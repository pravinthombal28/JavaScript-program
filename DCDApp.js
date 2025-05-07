/*
50. Find Greatest Common Divisor (GCD)
Description: Write a program to find the greatest common divisor (GCD) of two numbers.
Input: a = 12, b = 15

Output: 3
*/

let a=12,b=15;

for(let i=b;i>=1;i--)
{
		if(a%i==0 && b%i==0)
		{
			console.log(i);
			break;
		}
}