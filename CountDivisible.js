/*
 Count Numbers Divisible by 5
Description: Write a program to count the numbers divisible by 5 between 1 and n.
Input: n = 20


Output: 4
*/

let n=20
let count=0;
for(let i=1;i<=n;i++)
{
	if(i%5==0)
	{
		count++;
	}
}
console.log(count);