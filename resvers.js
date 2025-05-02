var a=1234;
var rev=0;
for(;a!=0;)
{
	let rem=a%10;
	rev=rev*10+rem;
	a= parseInt(a/10);
}
console.log("revers No :"+rev);