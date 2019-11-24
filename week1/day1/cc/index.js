// <-----------------Brute force method ---->
const method1 = (arr, target) =>{
    for(var i=0; i<arr.length-1; i++){
      for(var j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j] == target){
          return [i,j]
        }
      }
    }
  }
  console.log(method1([3,2,5,3], 6));
  
  // Time complexity = O(n^2)
  // Space complexity = O(1);
  
  // <-------------Method2 -------------->
  
  const method2 = (arr, target) =>{
    let object = {}
    for(let i=0; i<arr.length; i++){
      object[arr[i]] = i;
    }
    console.log(object);
    for(let i=0; i<arr.length; i++){
      let diff = target-arr[i]
      if(diff in object){
        return [i, object[diff]]
      }
    }
  }
  console.log(method2([3,2,5,3], 6)); 
  // Time complexity = O(n)
  // Space complexity = O(n);
  
  // <-------------Method3 -------------->
  
  const method3 = (arr, target) =>{
    let object = {}
    for(let i=0; i<arr.length; i++){
      let diff = target-arr[i]
      if(diff in object){
        return[object[diff], i]
      }
      object[arr[i]] = i;
    }
  }
  console.log(method3([3,2,5,3], 6)); 
  // Time complexity = O(n)
  // Space complexity = O(n);
  
  