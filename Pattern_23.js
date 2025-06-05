/*

Print Inverted Star Pattern
Description: Write a program to print an inverted star pattern.
Input: n = 4


Output:
****
***
**
*

*/

let n=4

for(let i=1;i<=n;i++)
{  let str="";
	for(let j=1;j<=n;j++)
	{
		if(j>=i)
		{
			str=str+" *";
		}
	}
	console.log(str);
}