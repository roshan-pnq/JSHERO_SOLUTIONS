function reverse(str){
a=''
if(str.length===0){
return ''}
else{
for(let i = str.length-1;i>=0;i--){
a+=str[i]}}
return a}