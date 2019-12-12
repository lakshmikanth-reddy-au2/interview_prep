if(window.Worker){
    var myWorker = new Worker('worker.js');
  
    var limit = 100000000;
  
    myWorker.postMessage(limit);
  
    myWorker.onmessage = function(e){
      alert("count done", e.data);
    }
  }