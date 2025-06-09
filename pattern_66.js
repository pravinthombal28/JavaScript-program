/*
Print Number Pyramid
Description: Write a program to print a pyramid of numbers.
Input: n = 4

Output:
    1
   121
  12321
 1234321
*/

let n=4;

for(let i=1;i<=n;i++)
{	var str="";
let num=1;
	for(let j=1;j<=7;j++)
	{
		if(j>4-i && j<4+i)
		{
			str +=num;
			if(j<=3)
			{
				num++;
			}
			else
			{
				num--;
			}
		}
		else
		{
			str +=" ";
		}
	}
	console.log(str);
}