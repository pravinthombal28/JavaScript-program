/*
Sum of First N Prime Numbers
Description: Write a program to calculate the sum of the first n prime numbers.
Input: n = 5


Output: 28
*/

let n=5
let sum=0

while(sum<n)
{
	let isprime=true;
	for(let i=2;i*i<=n;i++)
	{
			if(n%i===0)
			{
				
				isprime=false;
			}
	}	
}
if(isprime)
{
		sum=sum+i;
		count++;
}
console.log("sum of prime number :"+sum);

