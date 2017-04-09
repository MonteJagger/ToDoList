// $(document).ready(function() {
//   $('#input').change(function() {
//     var userInput = $("#input").val();
//     console.log(userInput);
//     var toDoItem = $("div").append("<p></p>");
//     $("p:last-child").append(userInput);
//     $("#input").val("");
//   });
// });


// $(document).ready(function() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("input").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   var ul = document.getElementsByClassName("ul");
//   ul.appendChild(li);
// });


$(document).ready(function() {
  //create x for each list
  var list = document.getElementsByTagName("li");
  for (var i=0; i<list.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("class", "close");
    var x = document.createTextNode("\u00D7");
    span.append(x);
    list[i].append(span);
  }

  // add check when clicked on
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  $(document).keypress(function(e) {
    var text = document.getElementById("input").value; // gets the value of the input

    if (e.which == 13) { // when enter is pressed
      var toDoItem = document.createElement("li"); // creates <li></li>
      toDoItem.append(text);                      // <li>text</li>
      // toDoItem.setAttribute("onclick", "Removeli()");
      toDoItem.setAttribute("class", "remove");
      $("#myUl").append(toDoItem);                // adds to the end of the list
      document.getElementById("input").value = ''; // resets user input

      // create x when enter is pressed
      var span = document.createElement("span");
      var x = document.createTextNode("\u00D7");
      span.setAttribute("class", "close");
      span.append(x);
      toDoItem.append(span);
    }




    // delete items when clicked on
    for (var i = 0; i < close.length; i++) {
      // when clicked
      close[i].onclick = function() {
        var span = document.createElement("span");
        span.setAttribute("class", "check");
        span.append(check);
        this.prepend(span);
      }
    }
  });
  console.log(close + ": 1");
});
