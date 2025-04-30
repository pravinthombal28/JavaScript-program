let no=6;
let sum=0;
let avg=0.0;
for(let i=1;i<=no;i++)
{
	sum=sum+i;
	avg=parseFloat(sum/no);
}
console.log("avg : "+avg);