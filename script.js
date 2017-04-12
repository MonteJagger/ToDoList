$(document).ready(function() {
  //create x for each list
  var list = document.getElementsByTagName("li");
  for (var i=0; i<list.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("class", "hide");
    var x = document.createTextNode("\u25bd");
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
      var parent = $(this).parent(); // gets the parent element

      if ($(this).hasClass("check")){
        var children = parent.children(); // get the whole list
        for (var j=0; j<children.length; j++) {
          if ($(children[j]).hasClass("check")) { // if the element has class check
            $(this).insertBefore(children[j]); // insert the element with the class before the first element the class check
            break;
          }
        }
      }
      else
      parent.append(this);

      $(this).toggleClass("check"); // add a check class
    }
  }

  var check = document.createTextNode("\u2713\t");

  $(".input").keypress(function(e) { //<input></input>
    var text = this.value; // gets the value of the input

    if (e.which == 13) { // when enter is pressed
      var toDoItem = document.createElement("li"); // creates <li></li>
      toDoItem.append(text);                      // <li>text</li>

      var ul = $(this).next(); // <ul></ul>

      var children = ul.children(); // get the whole list
      var count = 0;
      // adds the new item before the checked items
      for (var i=0; i<children.length; i++) {
        if ($(children[i]).hasClass("check")) { // if the element has class check
          $(toDoItem).insertBefore(children[i]); // insert the element with the class before the first element the class check
          count++;
          break;
        }
      }

      // if there are no checked items
      if (count == 0)
        ul.append(toDoItem);

      this.value = ''; // resets input value

      // create x when enter is pressed
      var span = document.createElement("span");
      var x = document.createTextNode("\u25bd");
      span.setAttribute("class", "hide");
      span.append(x);
      toDoItem.append(span);

      // when x is clicked on
      for (var i = 0; i < close.length; i++) {
        // when clicked on
        close[i].onclick = function() {
          this.parentElement.style.display = "none"; // does not display the list
        }
      }

      // crosses out to do item when clicked
      for (var i=0; i<checks.length; i++){
        checks[i].onclick = function() {
          var parent = $(this).parent(); // gets the parent element

          if ($(this).hasClass("check")){
            var children = parent.children(); // get the whole list
            for (var i=0; i<children.length; i++) {
              if ($(children[i]).hasClass("check")) { // if the element has class check
                $(this).insertBefore(children[i]); // insert the element with the class before the first element the class check
                break;
              }
            }
          }
          else
            parent.append(this);

          $(this).toggleClass("check"); // add a check class to element
        }
      }
    }
  });
});
