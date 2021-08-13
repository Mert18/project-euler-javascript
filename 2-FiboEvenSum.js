function fiboEvenSum(n) {
  // Defining first three elements
  let a=1;
  let b=1;
  let c= 2;
  let myArr= [];
  myArr.push(a);
  myArr.push(b);

  // Inserting elements
  while(c <= n){
    c = a+b;
    b = a;
    a = c;
    myArr.push(c);
  }
  // Since it also includes the bigger one at the end, we remove it.
  myArr.pop();

  // Filter it to have only even ones.
  const resArr = myArr.filter((el) => {
    return el%2 === 0
  })

  // Summing the filtered array. 
  return resArr.reduce((a,b) => a+b);
}