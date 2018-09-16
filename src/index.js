module.exports = function solveEquation(equation) {
  let arr = equation.match(/-? ?\d+/g);
  let nums=arr.map(function(num){
    return parseInt(num.replace(' ',''));    
  })
  let D=Math.sqrt(nums[2]*nums[2]-4*nums[0]*nums[3])/(2*nums[0]);
  let x=(-nums[2])/(2*nums[0]);
  let answer=[Math.round(x-D),Math.round(x+D)];// your implementation
  let compare=(a,b)=>(a-b);
  return answer.sort(compare);
}
