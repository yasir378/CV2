document.getElementById("sudoku-board").addEventListener("keyup", function(event) {
    /*This part of the code insures that the user can only 
    write the numbers between [1-9] not a string neither a 0 or
    two more than one digit number */
    if (event.target && event.target.nodeName == "TD")
        var valinum = /[1-9]/;
    var tde1 = event.target;
    if (tde1.innerText.length > 0 && valinum.test(tde1.innerText[0])) {
        tde1.innerText = tde1.innerText[0];
    } else {
        tde1.innerText = " ";
    }
    /*  
           function boardToString() {
               var string = " ";
               var valiNum = /[1-9]/;
               var tds = document.getElementById('id');
               for (var i = 0; i < tds.length(); i++) {
                   if (valiNum.test(tds[i].innerText[0])) {
                       string += tds[i].innerText;

                   } else {
                       string += "-";
                   }
               }
               return string;
           }
           document.getElementById("clear-button").addEventListener("click", clearboard);

           function clearboard() {
               var tds = document.getElementById("id");
               for (var i = 0; i < tds.length; i++) {
                   tds[i].innerText += " ";
               }
           } 
           */
});