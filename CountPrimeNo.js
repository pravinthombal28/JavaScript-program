let start=2;
let end=10;
let count=0;
for(let i=start;i<=end;i++)
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
		count++;
		//console.log(i);
	}
}
console.log(count);