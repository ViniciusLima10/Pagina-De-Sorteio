function sort(){
    const min = document.getElementById("minNumber").value;
    const max = document.getElementById("maxNumber").value;
  
    let sort = Math.floor(Math.random()*Math.floor(max))
  
    while(sort<min){
  
      sort = Math.floor(Math.random()*Math.floor(max));
    }
  
    document.getElementById("results").innerHTML=sort;
  }
  