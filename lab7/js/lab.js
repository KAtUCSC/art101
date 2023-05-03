// index.js - Is to practice with arrays and functions.
// Author: Michael Quinn and Kira
// Date: 5/2/2023

function sortInput() {
    var userName = window.prompt("[GIVE ME LETTERS AND I SORT THEM]");
    console.log("userName =", userName);
  
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
  
    console.log("nameArraySort =", nameArray.sort());
  
    var sorted = nameArray.join('');
    console.log("nameSorted =", sorted);
    return sorted;
  }
  
  document.writeln("[SORTED]<br>", sortInput(), "<br>");