
let num=12345;
let sum=0;
for(;num!=0;)
{
	let rem=num%10;
	sum=sum+rem;
	num=Math.trunc(num/10);
}

console.log("sum is : "+sum);