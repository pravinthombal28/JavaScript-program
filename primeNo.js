let num = 15

for(let i=2;i<=num;i++)
{
	let flag=true;

	for(let j=2;j<=i/2;j++)
	{
		if(i%j==0)
		{
			flag=false;
			break;
		}
	}
		if(flag)
		{
			console.log(i);
		}
}
