function recurssion(n){
  if(n == 1){
    return n;
  }
  else{
    return n*recurssion(n-1);
  }
}

console.log(recurssion(8));
