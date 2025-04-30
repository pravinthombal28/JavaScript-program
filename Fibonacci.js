let num=10;
let first=0;
let second=1;
let fibo=1;
console.log("fino series :"+first);
console.log("fino series :"+second);
for(let i=1;i<=num;i++)
{
	fibo=first+second;
	first=second;
	second=fibo;
	console.log("fino series :"+fibo);
}

