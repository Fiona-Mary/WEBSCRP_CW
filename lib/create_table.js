function create_table (URL, array) {
  var x = document.createElement("td");  
  for (var i = 0; i < 4; i++){
      if (i===0){
      Heading = "Product Code";
    }
    else if (i===1){
      Heading = "Name";
    }
    else if (i===2) {
      Heading = "Description";
    }
    else if (i===3) {
      Heading = "Price";
    }
    else if (i===4) {
      Heading = "Type";
    }
  x.appendChild(Heading);
  }
row.appendChild(x);
} 
