let count=0;
let num=12345678912356;
while(num!=0)
{
	let rem=num%10;
	if(rem>0)
	{
		count++;
	}
	num=Math.trunc(num/10);
}
console.log("Total Digit count is: "+count);