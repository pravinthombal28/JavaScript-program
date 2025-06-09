/*
Number Pyramid with Numbers
Description: Write a program to print a number pyramid.
Input: n = 5


Output:

     1
   121
  12321
 1234321
123454321
*/

let n=5
 for(let i=1;i<=n;i++)
 {  let num=1;
    let str="";
    for(let j=1;j<=9;j++)
    {
        if(j>5-i && j<5+i)
        {
            str=str+num;
            if(j<=4)
            {
                num++
            }
            else
            {
                num--
            }
        }
        else
        {
            str=str+" ";    
        }
    }
    console.log(str);
 }