let p=123;
let temp=p;
let rev=0;
while(p!=0)
{
	let rem=p%10;
	rev=rev*10+rem;	
	p=parseInt(p/10);
}

//console.log("rev number is :"+rev);

if(temp==rev)
{
	console.log(" palindrom number");
}
else{
	console.log("not a palindrom number");
}
