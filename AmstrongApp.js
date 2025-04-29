let num=151;
let count=0;
let temp=num;
let sum=0;
while(num!=0)
{
	num=Math.trunc(num/10);
	count++;
}
let orgNum=temp;
while(temp!=0)
{
	let rem=temp%10;
	let Amsrtong=1;
	let i=1;
	while(i<=count)
	{
		Amsrtong=Amsrtong*rem;
		i++;
	}
	sum=sum+Amsrtong;
	temp=Math.trunc(temp/10);
}

if(orgNum==sum)
	console.log("Amstrong");
else
	console.log("Not Amstrong");