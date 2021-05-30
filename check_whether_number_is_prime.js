function isPrime(num){
prime = true
if(num===1 || num===0){
prime = false
return prime
}
else{
for(let i=2;i<num;i++){
if(num%i===0){
prime=false
break}
}
return prime
}}