let n=4
for(let i=1;i<=n;i++)
{	
	let result="";
	for(let j=1;j<=n;j++)
	{	
		if(j<=(n+1)-i)
		{
			result=result+"*"
		}
		else	
		{
			result=result+" ";
		}	
	}
	console.log(result);
}