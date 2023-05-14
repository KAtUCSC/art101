// sort button :)
// Author: Michael Quinn and Kira
// Date: 14/5/2023

function sortInput(userName) {
    console.log("userName =", userName);
  
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
  
    console.log("nameArraySort =", nameArray.sort());
  
    var sorted = nameArray.join('');
    console.log("nameSorted =", sorted);
    return sorted;
  }
  
var button = document.getElementById("my-button");

button.addEventListener("click", function() {
  var name = document.getElementById("user-name").value;
  var sorted = sortInput(name);
  var output = document.getElementById("output");
  output.innerHTML = sorted;
})

colorChanger()

function randomColor(){
  var randomNum = Math.floor(Math.random() * 16777215);
  return '#' + randomNum.toString(16);
}

function colorChanger(){
  var rainbows = document.getElementsByClassName("minor-section");
  for (let i = 0; i < rainbows.length; i++){
    rainbows[i].style.backgroundColor = randomColor();
  }
  setTimeout(colorChanger, 1500);
}