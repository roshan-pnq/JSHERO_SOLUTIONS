function lcm(a,b){
let lcm = 0
let remainderA
let remainderB
do{
lcm++
remainderA = lcm%a 
remainderB = lcm%b}while(remainderA!==0 || remainderB!==0)

return lcm
}
