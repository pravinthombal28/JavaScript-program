let num=154;
let temp=num;
let count=0;
let sum=0;

while(temp!=0)
{
	//let rem=temp%10;
	
	temp=Math.trunc(temp/10);
	count++;	
}
//console.log(count);

let orgNum=num;
while(num!=0)
{
	let rem=num%10;
	let amstrong=1;
	
	for(let i=1;i<=count;i++)
	{
		amstrong=amstrong*rem;
		
	}
		sum=sum+amstrong;
	
	num=Math.trunc(num/10);
	

}
console.log(sum);
console.log(orgNum);
if(orgNum===sum)
{
	console.log("Number is Amstrong");
}
else{
	console.log("number is not Amstrong");
}