let num=13;
let i=1;
count=0;
while(i<=num)
{
	if(num%i==0)
	{
		count++;
	}
	i++;
}

if(count==2)
	console.log("Number is prime");
else
	console.log("Number is not prime");