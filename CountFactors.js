/*
Number of Factors
Description: Write a program to count the number of factors of a number.
Input: n = 12


Output: 6
*/

let num=12
let count=0

for(let i=1;i<=num;i++)
{
	if(num%i==0)
	{
		count++;
	}
}
console.log("count factor is: "+count);