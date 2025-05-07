/*
52. Find Least Common Multiple (LCM)
Description: Write a program to find the least common multiple (LCM) of two numbers.
Input: a = 12, b = 15


Output: 60
*/

let a=12;
let b=15;

for(let i=1;;i++)
{ if(i%a==0 && i%b==0)
	{
		console.log(i);
		break;
	}
}