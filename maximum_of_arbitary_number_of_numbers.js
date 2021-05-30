function max(){
let max =1
for(let i=0;i<arguments.length;i++){
if(arguments[i]>arguments[i+1]){
max = arguments[i]
arguments[i]=arguments[i+1]
}}
return max
}