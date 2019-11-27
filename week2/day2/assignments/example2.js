let array = [];
for(var i=1; i<=100; i++){
    array.push(i);
}
console.log(array);
  
localStorage.setItem("numbers", array)