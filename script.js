$(document).ready(function() {
  //create x for each list
  var list = document.getElementsByTagName("li");
  for (var i=0; i<list.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("class", "hide");
    var x = document.createTextNode("\u00D7");
    span.append(x);
    list[i].append(span);
  }

  // click on the close to hide
  var close = document.getElementsByClassName("hide");
  for (var i = 0; i < close.length; i++) {
    // when clicked on
    close[i].onclick = function() {
      this.parentElement.style.display = "none"; // does not display the list
    }
  }


  // crosses out to do item when clicked
  var checks = document.getElementsByTagName("li");
  for (var i=0; i<checks.length; i++){
    checks[i].onclick = function() {
      $(this).toggleClass("check");
    }
  }


  var check = document.createTextNode("\u2713\t");

  var toDoList = document.getElementsByClassName("input");

  for (var i=0; i<toDoList.length; i++) {
    toDoList[i].onclick = function() {
      $(this).keypress(function(e) {
        var text = this.value; // gets the value of the input

        if (e.which == 13) { // when enter is pressed
          var toDoItem = document.createElement("li"); // creates <li></li>
          toDoItem.append(text);                      // <li>text</li>
          // toDoItem.setAttribute("onclick", "Removeli()");
          var ul = $(this).next();
          console.log(ul);
          ul.append(toDoItem);                // adds to the end of the list
          this.value = ''; // resets user input

          // create x when enter is pressed
          var span = document.createElement("span");
          var x = document.createTextNode("\u00D7");
          span.setAttribute("class", "hide");
          span.append(x);
          toDoItem.append(span);

          for (var i = 0; i < close.length; i++) {
            // when clicked on
            close[i].onclick = function() {
              this.parentElement.style.display = "none"; // does not display the list
            }
          }

          // crosses out to do item when clicked
          for (var i=0; i<checks.length; i++){
            checks[i].onclick = function() {
              $(this).toggleClass("check");
            }
          }
        }

      });
    }
  }



});
