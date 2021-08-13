function largestPrimeFactor(number) {
  let biggest = 1;

  for(let i =0; i<= number; i++){
    if(number % i === 0 && isPrime(i) && i > biggest){
        biggest = i;
    }
  }
  return biggest;
}

function isPrime(x){
  let flag = true;

  if(x ===2){
    return true;
  } else if(x === 3){
    return true
  } else if(x %2 === 0){
    return false
  }
  for(let i=3; i<x ;i++){
    if(x%i === 0){
      flag = false;
    }
  }

  return flag;
}