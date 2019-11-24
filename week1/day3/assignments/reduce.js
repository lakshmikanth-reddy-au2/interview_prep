var arr = [1.5, 20.3, 11.1, 40.7]; 
   
        function sumofArray(sum, num) { 
            return sum + Math.round(num); 
        } 
        function myGeeks(item) { 
                    console.log(arr.reduce(sumofArray, 0)); 
        }