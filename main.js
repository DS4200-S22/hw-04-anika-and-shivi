
function increment() {
  var count = document.getElementById('counter').innerHTML;
  ++count;
  document.getElementById('counter').innerHTML = count;
}

function disappear() {
    // Get svg class
    let curr_visibility = document.getElementById("c3").getAttribute("class");

    // Change visibility
    if (curr_visibility == "appear") {
        document.getElementById("c3").setAttribute("class", "disappear");
    } else {
        document.getElementById("c3").setAttribute("class", "appear");
    }
}
