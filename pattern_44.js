/*
Print Star Pyramid
Description: Write a program to print a pyramid using stars.
Input: n = 5
Output:

     *
   ***
  *****
 *******
*********
*/

let n=5

for(let i=1;i<=n;i++)
{
	let str="";
	for(let j=1;j<=9;j++)
	{
		if(j>5-i && j<5+i)
		{
			str=str+" *";
		}
		else
		{
			str=str+"  ";
		}
	}
	console.log(str);
}