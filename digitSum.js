function digitsum(num){
    sum = 0
    while(num){
    sum+=num%10
    num = Math.floor(num/10)}
    return sum}
    
    // or for digit sum in single digit after reducing 
    
    function sumDigits(n) {
      return (n - 1) % 9 + 1;
    }