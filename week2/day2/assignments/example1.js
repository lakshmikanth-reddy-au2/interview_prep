var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
    if(xhr.status === 200){
        console.log("Status 200")
    }
  else{
      console.log("404 not found")
  }
};

xhr.send();